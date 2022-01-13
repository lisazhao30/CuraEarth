import React, { Component } from "react";
import "./Navbar.css"
import curaearth from "./images/curaearth.png"
import logo from "./images/logo.png"
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
    render() {
        return (
            <div id = "navbar-container">
                <img id = "curaearth" src = {curaearth}></img>
                    <div className="links-wrapper">
                        <div className="transform">
                            <span id = "home" class= "nav-option">
                                <Link 
                                    activeClass="active"
                                    to="beginning-container"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    Home
                                </Link>
                            </span>
                        </div>
                        <div className="transform2">
                            <span class= "nav-option">
                                <Link
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    About
                                </Link>
                            </span>
                        </div>
                        <div className="transform3">
                            <span class= "nav-option">
                                <Link
                                    activeClass="active"
                                    to="contact-container"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    Contact
                                </Link>
                            </span>
                        </div>
                        <img id = "logo" src = {logo}></img>
                    </div>
            </div>
        )
    }
}
