import React from "react";
import {Link} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
 

export default class NavB extends React.Component {

    render() {
        return(
            <Navbar className="d-flex justify-content-center">
                <Nav>
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                    <div className="px-3">
                        <Link to="/about-us">About Us</Link>
                    </div>
                    <div>
                        <Link to="/contact-us">Contact Us</Link>
                    </div>    
                    
                </Nav>
            </Navbar>
        )
    }
}