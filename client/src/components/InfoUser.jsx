import React from 'react';
import { withRouter } from 'react-router-dom';
import { getJwt } from '../helpers/jwt'
import axios from 'axios'

class InfoUser extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      /* Datos de usuario */
      user_id: 0,
      fullName: '',
      typeDocument: '',
      numberDocument: '',
      mobilePhone: '',
      email: '',
      neighborhood: '',
      addressHome: '',
      typeHouse:'',

      /* Datos registro Material */
      collects: [],

      /* Datos fecha Y/O lugar registrado */
      appointment_id: 0,
      appointmentLocation_id: 0,
      date: '',
      location: ''
    }
  }

  componentDidMount() {
    const token = getJwt();

    if(!token){
      return this.props.history.push('/login');
    }

    axios.get('/api/information/infoUser', {
      headers: {
        token: `${token}`
      },
    }).then(res => this.setState({
      id: res.data.infoUser[0].id,
      fullName: res.data.infoUser[0].fullName,
      typeDocument: res.data.infoUser[0].typeDocument,
      numberDocument: res.data.infoUser[0].numberDocument,
      mobilePhone: res.data.infoUser[0].mobilePhone,
      email: res.data.infoUser[0].email,
      neighborhood: res.data.infoUser[0].neighborhood,
      addressHome: res.data.infoUser[0].addressHome,
      typeHouse: res.data.infoUser[0].typeHouse,

      collects: res.data.infoMaterial,

      appointment_id: res.data.infoDate[0].id,
      date: res.data.infoDate[0].dateSchedule,

      appointmentLocation_id: res.data.infoLocation[0].id,
      location: res.data.infoLocation[0].locationName
    })).catch(err => {
      console.log(err);
      this.props.history.push('/login');
    })
  }

  onClick = (eventObject) => {
    eventObject.preventDefault();
    this.props.history.push('/');
  }

  render(){
    return(
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col-12 mb-4 d-flex justify-content-center p-3">
                    <img src="../../document/logo.jpg" className="logo" alt=""/>
                </div>
              </div>
              <h1 className="locate d-flex justify-content-center mt-4">Información De Interés</h1>
                <h6>DATOS DEL USUARIO</h6>
              <div className="row locate d-flex justify-content-center mt-2">
                <table>
                  <tbody>
                    <tr key={this.state.user_id}>
                      <td><strong><span>Nombre Completo: </span></strong>{this.state.fullName}</td>
                    </tr>
                    <tr key={this.state.user_id+1}>
                      <td><strong><span>Documento de Identidad: </span></strong>{this.state.typeDocument}</td>
                    </tr>
                    <tr key={this.state.user_id+2}>
                      <td><strong><span>Numero de Identidad: </span></strong>{this.state.numberDocument}</td>
                    </tr>
                    <tr key={this.state.user_id+3}>
                      <td><strong><span>Correo Electronico: </span></strong>{this.state.email}</td>
                    </tr>
                    <tr key={this.state.user_id+4}>
                      <td><strong><span>Celular: </span></strong>{this.state.mobilePhone}</td>
                    </tr>
                    <tr key={this.state.user_id+5}>
                      <td><strong><span>Barrio: </span></strong>{this.state.neighborhood}</td>
                    </tr>
                    <tr key={this.state.user_id+6}>
                      <td><strong><span>Dirección: </span></strong>{this.state.addressHome}</td>
                    </tr>
                    <tr key={this.state.user_id+7}>
                      <td><strong><span>Vivienda: </span></strong>{this.state.typeHouse}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h6>MATERIALES REGISTRADOS:</h6>
              <div className="row locate d-flex justify-content-center mt-2 mb-2">
                <table>
                  <tbody>
                    {
                      this.state.collects.map(listMaterial => {
                        return(
                            <tr key={listMaterial.id}>
                                <td><strong><span>Codigo de Barra: </span></strong>{listMaterial.codigoBarra}</td>
                                <td><strong><span>Material: </span></strong>{listMaterial.typeMaterial}</td>
                                <td><strong><span>Cantidad: </span></strong>{listMaterial.quantity}<span> unidades</span></td>
                            </tr>
                          )
                        }
                      )
                    }
                  </tbody>
                </table>
              </div>
              <h6>FECHA O LUGAR DE RECOLECCIÓN</h6>
              <div className="row locate d-flex justify-content-center mt-2 mb-2">
                <table>
                  <tbody>
                    <tr key={this.state.appointment_id}>
                      <td><strong><span>Fecha de Recolección: </span></strong>{this.state.date}</td>
                    </tr>
                    <tr key={this.state.appointmentLocation_id+1}>
                      <td><strong><span>Punto de Entrega Seleccionada: </span></strong>{this.state.location}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="row d-flex justify-content-center mt-4"> 
                    <h5><strong>GRACIAS ECO-CIUDADANO POR COLABORAR CON NUESTRO PLANETA!!!!</strong></h5>
              </div>
              
              <div className="row locate d-flex justify-content-center mt-4 mb-2">
                <button onClick={this.onClick} className="btn btn-lg btn-success">Finalizar</button>
              </div>
            </div>
          </div>
        </div>
        
      </React.Fragment>
    )
  }
}

export default withRouter(InfoUser);