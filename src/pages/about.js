import React from 'react'
import { default as logo1 } from '../images/curaeath-logo-1-3.svg';
import '../css/about.css';

const about = () => {
    return (
        <div className="about-section">
            <div className="title">
                <h1>
                    Our Mission
                </h1>
            </div>
            <div className="description">
                <p>
                    Description goes here
                </p>
            </div>
            <div className="logo">
                <img src={logo1} />
            </div>
            <div className="logo2">
                <img src={logo1} />
            </div>
            <div className="logo3">
                <img src={logo1} />
            </div>
            <div className="logo4">
                <img src={logo1} />
            </div>
        </div>
    )
}

export default about
