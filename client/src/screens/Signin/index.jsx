import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class index extends PureComponent {
  render() {
    return (
      
        <form className="form-signin container text-center mt-5">
          
          <img className="mb-4" src="../../document/logo.jpg" alt="" width="300" height="" />
          <h1 className="h3 mt-4 font-weight-normal">Iniciar Sesión</h1>
          <label htmlFor="inputEmail" className="sr-only">Email </label>
          <input type="email" id="inputEmail" className="form-control col-3 container mt-4" placeholder="Email "  />
          <label htmlFor="inputPassword" className="sr-only">Contraseña</label>
          <input type="password" id="inputPassword" className="form-control col-3 container mt-4" placeholder="Contraseña" />
          <div className="checkbox mt-2">
            <label>
              <input type="checkbox" value="remember-me" /> Recordarme
    </label>
          </div>
          <Link to="/Dashboard">
          <button className="btn btn-primary " type="submit">Ingresar</button>
          </Link>
          {/* <h6 className="mt-4">Not registered?</h6>
          <Link to="/">
          <button className="btn btn-primary mt-2" type="submit">Register</button>
          </Link> */}
          <p className="mt-5 mb-3 text-muted">© 2019</p>
        </form>
      

    )
  }
}

export default index;