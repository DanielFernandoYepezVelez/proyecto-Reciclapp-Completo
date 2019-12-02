import React from 'react';
import DatePicker from 'react-datepicker';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { getDay } from 'date-fns';
import { getJwt } from '../helpers/jwt';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import "../styles/Schedule.css";

class Schedule extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      startDate: new Date(),
      locations: [],

      /* Name que se envia al Backend */
      location: ''
    }
  }

  async componentDidMount() {
    const token = getJwt();

    if(!token){
      return this.props.history.push('/login');
    }

    axios.get('/api/schedule/locations', {
        headers: {
            token: `${token}`
        }
    }).then(res => this.setState({
      locations: res.data.locationsDB,
      location: res.data.locationsDB[0].id
    })).catch(err => { 
      console.log(err);
      this.props.history.push('/login');
    })
  }

    isWeekDay = date => {
      const day = getDay(date);
      return day !== 0 && day !== 6
    }
    
    handleChange = date => {
      this.setState({
        startDate: date
      });
    };

    onSubmit = async(/* eventObject */) => {
      // eventObject.preventDefault();
      const token = getJwt();

      this.setState({
        startDate: new Date()
      });

      // return console.log(this.state.location);

      axios.post('/api/schedule/date', {
        date: this.state.startDate,
        location_id: this.state.location
       },
       {
        headers: {
          token: `${token}`
      }}).then(res => console.log(res.data.ok));
    }

    onSelectChange = (eventObject) => {
      this.setState({
        [eventObject.target.name]: eventObject.target.value
    })
    console.log(eventObject.target.name, eventObject.target.value);
    }

    onSubmitTwo = async(/* eventObject */) => {
      // eventObject.preventDefault();
      const token = getJwt();

      // return console.log(this.state.location)

      axios.post('/api/schedule/location', {
        location_id: this.state.location
       },
       {
        headers: {
          token: `${token}`
      }}).then(res => console.log(res.data.ok));
    }
    
    onClick = (eventObject) => {
      eventObject.preventDefault();
      this.onSubmit();
      this.props.history.push('/RegisterMaterial');
    }

    onClickTwo = (eventObject) => {
      eventObject.preventDefault();
      this.onSubmitTwo();
      this.props.history.push('/RegisterMaterial');
    }
   
    render() {
      return (
        <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col-12 mb-4 d-flex justify-content-center p-3">
                    <Link to=''>
                      <img src="../../document/logo.jpg" className="logo" alt=""/>
                    </Link>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mb-5">
                  <h3>Seleccione el metodo que desee para realizar su recolección</h3>
                </div>
                    <ul>
                      <li>
                        <h6 className="mb-2">Recolección Domestica</h6>
                      </li>
                    </ul>
                <div className="row d-flex justify-content-center mt-3">
                  <form onSubmit={this.onSubmit}>
                    <DatePicker className="form-control" selected={this.state.startDate} filterDate={this.isWeekDay} onChange={this.handleChange}/>
                    <button onClick={this.onClick} type="submit" className="btn btn-md ml-2 btn-date">Agendar</button>
                  </form>
                </div>
                <hr/>
                <div>
                  <ul>
                    <li>
                      <h6 className="mb-2">Puntos de Recolección <span><FontAwesomeIcon icon={faMapMarkerAlt}/></span></h6>
                    </li>
                  </ul>
                </div>
                <div className="row locate d-flex justify-content-center mt-4">
                  <form onSubmit={this.onSubmitTwo} className="container text-center d-flex justify-content-center">
                    <div className="col-md-6">
                      <select onChange={this.onSelectChange} name="location" className="form-control mb-4" required>
                          {
                              this.state.locations.map(locationAddress => 
                              <option key={locationAddress.id} value={locationAddress.id}>
                                  {locationAddress.locationName}
                              </option>)
                          }
                      </select>
                    </div>
                    <div className="mt-3">
                      <button onClick={this.onClickTwo} type="submit" className="mt-5 btn btn-md btn-date">Seleccionar</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
}

export default withRouter(Schedule);