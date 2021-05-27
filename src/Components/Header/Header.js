import React from "react";
import { Nav } from "react-bootstrap";
import Logo from '../../Images/logo.png';
import './Header.css';

const HeaderComponent = props => {
   
    return (
        <>
        <div className="header-container">
            <span className="header-logo"><img src={Logo}/></span>
            <div>
                <Nav defaultActiveKey="/entities">
                    <Nav.Item>
                        <Nav.Link href="/dashboard" className="header-link">Dashboard</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="search" className="header-link">Search</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="mandates" className="header-link">Mandates</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="cases" className="header-link">Cases</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="entities" className="header-link">Entities</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="biometrics" className="header-link" >Biometrics</Nav.Link>
                    </Nav.Item>
                </Nav>

            </div>

        </div>
          
        </>
        );
  };
  export default HeaderComponent