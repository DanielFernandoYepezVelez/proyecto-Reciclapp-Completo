import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Confirmation.css'

class Confirmation extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row card-principal">
                        <div className="col col-8 col-md-12">
                            <div className="row d-flex justify-content-center align-items-center flex-column">
                                <div className="row">
                                    <div className="logo d-flex justify-content-center mt-5">
                                        <img src="../../document/logo.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="card mt-5">
                                        <div className="card-body">
                                            <h3 className="card-title mb-4">VALIDACION DE CUENTA</h3>
                                            <p className="card-text">Ingresa el codigo enviado a su dirección de correo electronico</p>
                                        </div>
                                        <div className="card-body">
                                            <input type="password" className="form-control" placeholder="CODIGO"/>
                                            <div className="d-flex justify-content-center boton mt-3">
                                                <Link to="/instructive">
                                                    <button type="submit" className="btn btn-lg btn-continuar">CONTINUAR</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Confirmation;