import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';


// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import "./styles.css"

export class Sidenav extends PureComponent {
    render() {
        return (

            <div className="container col-control">
                <SideNav
                    className="customSideNav"
                    onSelect={(selected) => {
                        // Add your code here
                    }}
                >

                    <SideNav.Toggle />

                    <SideNav.Nav defaultSelected="home" className="SideNav-Style">

                        <NavItem eventKey="Dashboard" >
                            <NavIcon>
                                <Link to="/Dashboard">
                                    <img src="https://image.flaticon.com/icons/svg/748/748060.svg" className="" width="25px" alt="" />
                                </Link>
                            </NavIcon>
                            <NavText>
                                <Link to="/Dashboard"  >
                                    Dashboard
                                </Link>
                            </NavText>
                        </NavItem>

                        <NavItem eventKey="Users" >
                            <NavIcon>
                                <Link to="/Users">
                                    <img src="https://image.flaticon.com/icons/svg/32/32441.svg" className="" width="25px" alt="" />
                                </Link>
                            </NavIcon>
                            <NavText>
                                <Link to="/Users"  >
                                    Usuarios Registrados
                                </Link>
                            </NavText>
                        </NavItem>

                        <NavItem eventKey="Appointment" >
                            <NavIcon>
                                <Link to="/Appointment">
                                    <img src="https://image.flaticon.com/icons/svg/833/833593.svg" className="" width="25px" alt="" />
                                </Link>
                            </NavIcon>
                            <NavText>
                                <Link to="/Appointment"  >
                                    Agenda
                                </Link>
                            </NavText>
                        </NavItem>

                        <NavItem eventKey="Confirmation" >
                            <NavIcon>
                                <Link to="/ConfirmationDate">
                                    <img src="https://image.flaticon.com/icons/svg/100/100975.svg" width="20px" alt="" />
                                </Link>
                            </NavIcon>
                            <NavText>
                                <Link to="/ConfirmationDate">
                                    Confirmación
                                </Link>
                            </NavText>
                        </NavItem>

                        <NavItem eventKey="Exit" >
                            <NavIcon>
                                <Link to="/Home">
                                    <img src="https://image.flaticon.com/icons/svg/25/25376.svg" width="20px" alt="" />
                                </Link>
                            </NavIcon>
                            <NavText>
                                <Link to="/Home">
                                    Salir
                                </Link>
                            </NavText>
                        </NavItem>

                    </SideNav.Nav>
                </SideNav>
            </div>
        );
    }
}

export default Sidenav;
