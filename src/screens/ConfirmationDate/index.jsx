import React, { PureComponent } from 'react';
import Header from '../common/components/Header';
import Sidenav from '../common/components/Sidenav';
import axios from 'axios';
import '../ConfirmationDate/styles.css'

export class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      AllUsersConfirmed: []
    }
  }

  async componentDidMount() {
    const responseAllUsersConfirmed = await axios.get('http://localhost:4000/api/getAppointments/appointments');

    this.setState({
      AllUsersConfirmed: responseAllUsersConfirmed.data.appointments
    });
    // console.log(this.state.AllUsersConfirmed);
  }

  render() {
    return (
      <div>
        <Header />
        <Sidenav />
        <div className="container text-center mt-5">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th className="text-center th-confirmationdate">Tipo Documento</th>
                <th className="text-center th-confirmationdate">Numero Documento</th>
                <th className="text-center th-confirmationdate">Nombre Completo</th>
                <th className="text-center th-confirmationdate">Correo Electronico</th>
                <th className="text-center th-confirmationdate">Barrio</th>
                <th className="text-center th-confirmationdate">Direccion</th>
                <th className="text-center th-confirmationdate">Tipo Material</th>
                <th className="text-center th-confirmationdate">Cantidad</th>
                <th className="text-center th-confirmationdate">Solicitud</th>
              </tr>
            </thead>
            <tbody>
            {
              this.state.AllUsersConfirmed.map(usersConfirmed => {
                return (
                  <tr key={usersConfirmed.id}>
                      <td className="text-center">{usersConfirmed.typeDocument}</td>
                      <td className="text-center">{usersConfirmed.numberDocument}</td>
                      <td className="text-center">{usersConfirmed.fullName}</td>
                      <td className="text-center">{usersConfirmed.email}</td>
                      <td className="text-center">{usersConfirmed.neighborhood}</td>
                      <td className="text-center">{usersConfirmed.addressHome}</td>
                      <td className="text-center">{usersConfirmed.typeMaterial}</td>
                      <td className="text-center">{usersConfirmed.quantity}</td>
                      <td className="text-center"><button type="button" className="btn btn-outline-success btn-ln">Confirmado</button></td>
                  </tr>)})
            }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default index;