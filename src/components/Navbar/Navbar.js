import React from "react"
import "./Navbar.css"
import curaearth from "./images/curaearth.png"
import logo from "./images/logo.png"

const Navbar = () => {
    return (
        <div id = "navbar-container">
            <img id = "curaearth" src = {curaearth}></img>
            <span id = "home" class= "nav-option" >Home</span>
            <span class= "nav-option">About</span>
            <span class= "nav-option">Contact</span>
            <img id = "logo" src = {logo}></img>
        </div>
    )
}

export default Navbar