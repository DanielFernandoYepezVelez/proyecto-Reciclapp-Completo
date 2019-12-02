import React, { PureComponent } from 'react';
import Header from '../common/components/Header';
import Sidenav from '../common/components/Sidenav';
import '../Users/styles.css';
import axios from 'axios';

export class index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            AllUsersRegistered: []
        }
    }

    async componentDidMount(){
        const responseAllUsersRegistered = await axios.get('/api/getUser/users');
        
        this.setState({
            AllUsersRegistered: responseAllUsersRegistered.data.users
        })
        // console.log(this.state.AllUsersRegistered);
    }

    render() {
        return (
            <div>
                <Header />
                <Sidenav />

                <div className="mt-5 container">
                    <div className="table-responsive">
                        <table className="table table-striped table-sm mt-5">
                            <thead className="thead-dark">
                                <tr>
                                    <th className="text-center th-user">Numero Documento</th>
                                    <th className="text-center th-user">Nombre Completo</th>
                                    <th className="text-center th-user">Correo Electronico</th>
                                    <th className="text-center th-user">Fecha Registro</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.AllUsersRegistered.map( users => {
                                        return (
                                            <tr key={users.id}>
                                                <td className="text-center">{users.numberDocument}</td>
                                                <td className="text-center">{users.fullName}</td>
                                                <td className="text-center">{users.email}</td>
                                                <td className="text-center">{users.created_at}</td>
                                            </tr>)})
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default index;