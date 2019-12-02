import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css';

class Login extends React.Component{
    constructor(props){
       super(props);
       this.state = {
           email: '',
           password: ''
       }
    }
    
    onSubmit = () => {
        // eventObject.preventDefault();
        this.setState({
            email: '',
            password: ''
        });

        axios.post('/api/loginVerify/loginUser', {
            email: this.state.email,
            password: this.state.password
        }).then(res => localStorage.setItem('token', res.data.token));
    }

    onInputChange = (eventObject) => {
        this.setState({
            [eventObject.target.name]: eventObject.target.value
        });
        // console.log(eventObject.target.name, eventObject.target.value);
    }

    onClick = (eventObject) => {
        eventObject.preventDefault();
        this.onSubmit();
        this.props.history.push('/instructive');
    }

    render(){
        return(
            <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col mt-5 d-flex align-items-center justify-content-center flex-column">
                            <img src="../../document/logo.jpg" alt="" className=" logo mb-3"/>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input onChange={this.onInputChange} value={this.state.email} type="email" className="form-control" name="email" placeholder="Correo Electronico" required/>
                            </div>
                            <div className="form-group">
                                <input onChange={this.onInputChange} value={this.state.password} type="password" className="form-control" name="password" placeholder="Contraseña" required/>
                            </div>
                            <div className="form-group">
                                <button onClick={this.onClick} type="submit" className="form-control btn btn-lg" name="button">Entrar</button>
                            </div>
                            {/* <div className="form-group">
                                <a href="/register" className="text-muted d-flex justify-content-center">¿Olvidaste la contraseña?</a>
                            </div>  */}
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
    }
}

export default withRouter(Login);