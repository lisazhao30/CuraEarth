import React from "react"
import "./Contact.css"
import curaearth from "./images/curaearth.png"
import logo from "./images/logo.png"
import email from "./images/email.svg"
import subject from "./images/subject.svg"

const Contact = () => {
    return (
        <div id = "contact-container">
            <img src = {logo} id = "logo2"></img>
            <div id = "form-container">
                <span class = "individual-container">
                    <img class = "icon" src = {email}></img>
                    <input class = "inp" placeholder = "Type your email here"></input> 
                </span>
                <br></br>
                <span class = "individual-container">
                    <img class = "icon" src = {subject}></img>
                    <input class = "inp" placeholder = "Type your subject here"></input> 
                </span>
                <br></br>
                <span class = "individual-container">
                    <textarea id = "textarea" class = "inp" placeholder = "Type your inquiry here"></textarea>
                </span>
                <br></br>
                <button id = "contact-btn">Contact Us!</button>
            </div>
            <div id = "header">Let's shape the Earth.</div>
        </div>
    )
}

export default Contact