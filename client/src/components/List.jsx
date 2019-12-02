import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { getJwt } from '../helpers/jwt';
import axios from 'axios';
import '../styles/List.css';

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            productsList: []
        }
    }

    componentDidMount() {
        const token = getJwt();

        if(!token){
            return this.props.history.push('/login');
        }

        axios.get('/api/product/listProducts', {
            headers: {
                token: `${token}`
            }
        }).then(res => this.setState({
            productsList: res.data.productsDB
        })).catch(err => {
            this.props.history.push('/login');
        })
    }

    onClick = (eventObject) => {
        eventObject.preventDefault();
        this.props.history.push('/infoUser');
    }

    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="row mb-4 d-flex justify-content-center p-3">
                                <Link to='/RegisterMaterial'>
                                    <img src="../../document/logo.jpg" alt=""/>
                                </Link>
                            </div>
                            <div className="row">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="text-center th-list">Codigo de Barra</th>
                                            <th className="text-center th-list">Material</th>
                                            <th className="text-center th-list">Cantidad</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.productsList.map(listMaterial => {
                                                return(
                                                    <tr key={listMaterial.id}>
                                                        <th className="text-center">{listMaterial.codigoBarra}</th>
                                                        <th className="text-center">{listMaterial.typeMaterial}</th>
                                                        <th className="text-center">{listMaterial.quantity}</th>
                                                        {/* <th className="text-center"><button type="submit" className="btn btn-eliminar">Eliminar</button></th> */}
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="row d-flex justify-content-center mt-5">
                                <button onClick={this.onClick} className="ml-5 mb-5 btn btn-lg">Finalizar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(List);