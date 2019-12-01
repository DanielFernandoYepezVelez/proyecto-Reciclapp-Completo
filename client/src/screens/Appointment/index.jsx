import React, { PureComponent } from 'react';
import Header from '../common/components/Header';
import Sidenav from '../common/components/Sidenav';
import QRCode from 'qrcode.react'
import '../Appointment/styles.css';
import axios from 'axios';

export class index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            AllUsersAppointments: []
        }
    }

    async componentDidMount() {
        const responseAllUsersAppointments = await axios('http://localhost:4000/api/getAppointments/appointments');

        this.setState({
            AllUsersAppointments: responseAllUsersAppointments.data.appointments
        });
        console.log(this.state.AllUsersAppointments);
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
                          <th className="text-center th-appointment">Tipo Documento</th>
                          <th className="text-center th-appointment">Numero Documento</th>
                          <th className="text-center th-appointment">Nombre Completo</th>
                          <th className="text-center th-appointment">Correo Electronico</th>
                          <th className="text-center th-appointment">Barrio</th>
                          <th className="text-center th-appointment">Direccion</th>
                          <th className="text-center th-appointment">Tipo Material</th>
                          <th className="text-center th-appointment">Cantidad</th>
                          <th className="text-center th-appointment">QR</th>
                          <th className="text-center th-appointment">Solicitud</th>
                        </tr>
                      </thead>
                      <tbody>
                      {
                        this.state.AllUsersAppointments.map(usersAppointment => {
                          return (
                            <tr key={usersAppointment.id}>
                                <td className="text-center">{usersAppointment.typeDocument}</td>
                                <td className="text-center">{usersAppointment.numberDocument}</td>
                                <td className="text-center">{usersAppointment.fullName}</td>
                                <td className="text-center">{usersAppointment.email}</td>
                                <td className="text-center">{usersAppointment.neighborhood}</td>
                                <td className="text-center">{usersAppointment.addressHome}</td>
                                <td className="text-center">{usersAppointment.typeMaterial}</td>
                                <td className="text-center">{usersAppointment.quantity}</td>
                                <td className="text-center"><QRCode value={usersAppointment.id}/></td>
                                <td className="text-center"><button type="button" className="btn btn-danger btn-ln">Pendiente</button></td>
                            </tr>)})
                      }
                      </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default index;