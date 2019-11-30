import React from 'react';
import Quagga from 'quagga';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import { getJwt } from '../helpers/jwt';
import '../styles/RegisterMaterial.css';

class RegisterMaterial extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          nocamera: false,
          typeMaterials: [],

           /* Valor Inicial de cada name, para enviar al backend */
          codigoScanner:'',
          typeMaterial: '',
          quantityofproducts: ''
        };
      }
    
      async componentDidMount() {
        const token = getJwt();

        if(!token){
          return this.props.history.push('/login');
        }
    
        axios.get('http://localhost:4000/api/material/typeMaterials', {
            headers: {
                token: `${token}`
            }
        }).then(res => this.setState({
            typeMaterials: res.data.materials,
            typeMaterial: res.data.materials[0].id
        })).catch(err => { 
            console.log(err);
            this.props.history.push('/login');
        })

        Quagga.init(
          {
            inputStream: {
              name: "Live",
              type: "LiveStream",
              constraints: {
                width: "500",
                height: "500"
              },
              numberOfWorkers: navigator.hardwareConcurrency,
              target: document.querySelector("#barcodescan")
            },  
            locate: true,
            decoder: {
              readers: ['ean_reader']
            }
          },
          function(err) {
            if (err) {
              console.log(err);
              return;
            }
            console.log("Initialization finished. Ready to start");
            Quagga.start();
            /* "code_128_reader","upc_reader", "upc_e_reader" */
          }
        );

        Quagga.onDetected(data => {
            console.log(data);
            document.querySelector("#codigo").innerHTML = data.codeResult.code;
            this.setState({
                codigoScanner: data.codeResult.code
            })
            // console.log(this.state.codigoScanner);
        });
    };

    onSelectAndInputChange = (eventObject) => {
        this.setState({
            [eventObject.target.name]: eventObject.target.value
        })
        // console.log(eventObject.target.name, eventObject.target.value);
    }

    onSubmit = async(eventObject) => {
        eventObject.preventDefault();

        this.setState({
            codigoScanner: '',
            // typeMaterial: '',
            quantityofproducts: ''
        });
        document.querySelector("#codigo").innerHTML = '';

        const token = getJwt();
        axios.post('http://localhost:4000/api/material/createMaterial', {
            codigoScanner: this.state.codigoScanner,
            quantity: this.state.quantityofproducts,
            typeMaterial_id: this.state.typeMaterial
        },
        {
            headers: {
                token: `${token}`
            }
        }).then(res => console.log(res.data.ok))
    }

    onSubmitTwo = () => {
        this.setState({
            codigoScanner: '',
            // typeMaterial: '',
            quantityofproducts: ''
        });
        document.querySelector("#codigo").innerHTML = '';

        const token = getJwt();
        axios.post('http://localhost:4000/api/material/createMaterial', {
            codigoScanner: this.state.codigoScanner,
            quantity: this.state.quantityofproducts,
            typeMaterial_id: this.state.typeMaterial
        },
        {
            headers: {
                token: `${token}`
            }
        }).then(res => console.log(res.data.ok))
    }

    onClick = (eventObject) => {
        eventObject.preventDefault();

        this.onSubmitTwo();
        setTimeout(() => {
           this.onClickFinal();
        }, 1000);
      }

      onClickFinal = () => {
        this.props.history.push('/List');
      }

    render(){
        return(
            <React.Fragment>
                <div className="container">
                <div className="row">
                    <div className="col overflow-auto">
                        <div className="row">
                            <div className="col-12 mb-4 d-flex justify-content-center p-3">
                                <Link to=''>
                                    <img src="../../document/logo.jpg" className="logo" alt=""/>
                                </Link>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col-12 d-flex mb-4 align-items-center justify-content-center title">
                                <h3>Registro de Materiales</h3>
                            </div>
                        </div>
                          <form onSubmit={this.onSubmit}>
                          <div className="form-group row ">
                                <div className="col-12">
                                    <h6 className="d-flex justify-content-center">Escaner de Codigo de Barra</h6>
                                    <div id='barcodescan' className="d-flex justify-content-center"></div>
                                    <div id="codigo" className="d-flex justify-content-center"></div>
                                </div>
                            </div>
                            {/* <div className="form-group row">
                                <div className="col-12">
                                    <h6>Codigo de Barra</h6>
                                    <input type="text" className="form-control"/>
                                </div>
                            </div> */}
                            <div className="form-group row">
                                <div className="col-12">
                                    <h6>Tipo de Material</h6>
                                    <select onChange={this.onSelectAndInputChange} name="typeMaterial" typeof="text" className="form-control" required>
                                        {
                                            this.state.typeMaterials.map(typeMaterial => 
                                            <option key={typeMaterial.id} value={typeMaterial.id}>
                                                {typeMaterial.typeMaterial}
                                            </option>)
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-12">
                                    <h6>Cantidad</h6>
                                    <input onChange={this.onSelectAndInputChange} value={this.state.quantityofproducts} name="quantityofproducts" type="text" className="form-control" required/>
                                </div>
                            </div>
                            <div className="form-group row d-flex justify-content-center mt-3 mb-3">
                                <button  type="submit" className="btn btn-lg btn-registrarse" name="registrarse">Scannear Otro Material</button>              
                            </div>
                        </form>
                        <div className="form-group row d-flex justify-content-center mr-4 mb-5">
                            <form onSubmit={this.onSubmitTwo}>
                                <button onClick={this.onClick} type="submit" className="btn btn-lg btn-registrarse ml-5" name="registrarse">Listar Materiales</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default withRouter(RegisterMaterial);