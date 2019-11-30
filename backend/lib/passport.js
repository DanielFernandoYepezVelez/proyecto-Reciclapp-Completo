const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const poolConnection = require('./dbConnect');
const { encryptPassword, matchPassword } = require('../lib/helpers');

passport.use('local.signin', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true

}, async(req, email, password, done) => {
    const registros = await poolConnection.query('SELECT * FROM users WHERE email = ?', [email]);
    if (registros.length > 0) {
        const user = registros[0];
        const validPassword = await matchPassword(password, user.password);

        console.log(user.fullName, user.password, validPassword);

        if (validPassword) {
            done(null, false, user /* , req.flash('success', 'Bienvenido ' + user.fullName) */ );
            console.log('usuario inicio Sesion correctamente');
        }
    } else {
        return done(null, false /* , req.flash('mensajeFallido', 'El Usuario No Existe') */ );
    }
}));

passport.use('local.signup', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async(req, email, password, done) => {

    try {
        const {
            fullName,
            document_id,
            numberDocument,
            mobilePhone,
            addressHome,
            neighborhood_id,
            house_id,
            membersHome
        } = req.body;

        /* Solo me deja validar el dato directo del req.body */
        // if (!fullName) {
        //     return done(null, false, req.flash('mensajeFallido', 'Ingresa Un Nombre De Usuario'));
        // }

        /* Datos Necesarios Para Crear Un Nuevo Usuario, que estan en el formulario del registro */
        const newUser = {
            fullName,
            document_id,
            numberDocument,
            email,
            password,
            mobilePhone,
            addressHome,
            neighborhood_id,
            house_id,
            membersHome
        }

        /* Antes de guardar el usuario cifro la contraseña */
        newUser.password = await encryptPassword(password);

        /* Darle a la BD el objeto para que lo almacene, pero para eso debo traerme la conexion a la BD, a través de pool*/
        const respuesta = await poolConnection.query('INSERT INTO users SET ?', [newUser]);

        /* Respuesta de la Inserción en la BD */
        console.log(respuesta);

        /* Agregando el id al usuario registrado desde la respuesta y su propiedad insertId */
        newUser.id = respuesta.insertId;

        /* Cuando Ya tiene todos lo datos y el error no existe, etonces el DONE continua con la aplicación */
        return done(null, newUser);
    } catch (error) {
        console.log(error);
    }
}));

/* Middlewares, para Serializar un usuario vamos a utilizar el usuario que se ha guardado o registrado*/
passport.serializeUser(async(user, done) => {

    try {
        /* Por su id lo guardo en la sessión */
        done(null, user.id);
    } catch (error) {
        console.log(error);
    }

});

/* Middlewares, para Deserializar un usuario Gracias al id puedo volver a tener los datos que anteriormente guarde en la serialización*/
passport.deserializeUser(async(id, done) => {

    try {
        const rows = await poolConnection.query('SELECT * FROM users WHERE id = ?', [id]);
        /* Al obtener el query me da un arreglo, entonces tomo el objeto con indice 0 de ese arreglo y además es el único objeto que existe */
        done(null, rows[0]);
    } catch (error) {
        console.log(error);
    }

});