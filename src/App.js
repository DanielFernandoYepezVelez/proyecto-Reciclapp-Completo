import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Component App
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Confirmation from './components/Confirmation';
import Instructive from './components/Instructive';
import RegisterMaterial from './components/RegisterMaterial'
import List from './components/List'
import Schedule from './components/Schedule'
import InfoUser from './components/InfoUser';
//Corresponde al Dashboard
import Dashboard from './screens/Dashboard';
import ConfirmationDate from './screens/ConfirmationDate';
import Users from './screens/Users';
import Signin from './screens/Signin';
import Collector from './screens/Collector';
import Appointment from "./screens/Appointment";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Register" component={Register}/>
        <Route exact path="/Confirmation" component={Confirmation}/>
        <Route exact path="/Instructive" component={Instructive} />
        <Route exact path="/RegisterMaterial" component={RegisterMaterial}/>
        <Route exact path="/List" component={List}/>
        <Route exact path="/Schedule" component={Schedule}/>
        <Route exact path="/InfoUser" component={InfoUser}/>
      {/* //Corresponde al Dashboard */}
        <Route exact path="/Home" component={Signin}/>
        <Route exact path="/Collector" component={Collector}/>
        <Route exact path="/Dashboard" component={Dashboard}/>
        <Route exact path="/Users" component={Users}/>
        <Route exact path="/ConfirmationDate" component={ConfirmationDate}/>
        <Route exact path="/Appointment" component={Appointment}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;