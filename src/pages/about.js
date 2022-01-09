import React from 'react'
import { default as logo1 } from '../images/curaeath-logo-1-5.svg';
import '../css/about.css';

const about = () => {
    return (
        <div className="about-section">
            <div className="rectangle">
                
            </div>
            <div className="test">
                <div className="logo">
                    <img src={logo1} />
                </div>
                <div className="title">
                    <h1>
                        Our
                        <br></br> Mission
                    </h1>
                </div>
                <div className="logo2">
                    <img src={logo1} />
                </div>
                <div className="logo3">
                    <img src={logo1} />
                </div>
            </div>
            <div className="description">
                <p>
                    Description goes here
                </p>
            </div>
            <div className="logo4">
                <img src={logo1} />
            </div>
        </div>
    )
}

export default about
