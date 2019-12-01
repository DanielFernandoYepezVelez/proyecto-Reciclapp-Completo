import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Home.css'


class Home extends React.Component{
    //constructor(props){
    //    super(props)
    //}

    render(){
        return(
            <React.Fragment>
                <div className="container-fluid">
                     <div className="row ">
                         <div className="col d-flex align-items-center justify-content-center flex-column logo">
                             <div className="mb-5 logotipo">
                                <img src="../../document/logo.jpg" alt=""/>
                             </div>
                            <Link to="/Login">
                                 <button type="submit" className="btn btn-lg btn-login mb-4">INICIAR SESION</button>
                            </Link>
                            <Link to="/Register">
                                 <button type="submit" className="btn btn-lg btn-signup">REGISTRARSE</button>
                            </Link>
                         </div>
                     </div>
                </div>
            </React.Fragment>
        )
    }
  
}

export default Home;