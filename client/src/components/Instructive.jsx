import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../styles/Instructive.css';

class Instructive extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="row d-flex justify-content-center mb-2">
                                <Link to='/'>
                                    <img src="../../document/logo.jpg" alt="" className="logo mb-3" />
                                </Link>
                            </div> 

                            <div className="row d-flex justify-content-center mb-5">
                                <div className="col col-12">
                                    <h2 className=" mt-4 mb-4 d-flex justify-content-center">Bienvenido Eco-Ciudadano</h2>
                                    <p>Habiendo validado sus datos de inscripción le informamos que sólo la Fundación ReciclApp tendrá acceso a sus datos, los cuales se manejarán con la reserva que define la legislación de Colombia.</p>
                                    <p>En los proximos días se le hará llegar a su domicilio el KIT  de reciclaje que consta de:</p>
                                    <ul>
                                        <li className="ml-5">Bolsa para el almacenamiento de materiales de reciclaje.</li>
                                        <li className="ml-5">Pad magnético con el instructivo resumido de separación y clasificación de reciclaje</li>
                                        <li className="ml-5">Etiquetas con el codigo QR que deberá colocar en el bolsillo superior de su bolsa y que tiene sus datos, para ser identificado por el recolector</li>
                                    </ul>


                                    <p>A continuación tendra la opción de elegir si desee que el material a reciclar sea buscado en su hogar ó llevarlo a un punto de recolección cercano.</p>
                                </div>
                            </div>

                            <div className="row justify-content-center mb-4">
                                <Link to='/Schedule'>
                                    <button className="form-control btn btn-lg btn-register-material" name="RegisterMaterial">Continuar</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(Instructive);