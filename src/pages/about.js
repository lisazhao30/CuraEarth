import React from 'react'
import { default as logo1 } from '../images/curaeath-logo-1-5.svg';
import { default as name1 } from '../images/curaearth-text-3.svg';
import '../css/about.css';

const about = () => {
    return (
        <div className="about-section" id="about">
            <div className="topStats">
                <div className="stats">
                    <h1>
                        1.9k
                    </h1>
                    <p>
                        People joining us.
                    </p>
                </div>
                <div className="stats2">
                    <h1>
                        39K
                    </h1>
                    <p>
                        Hours of action.
                    </p>
                </div>
                <div className="stats3">
                    <h1>
                        1.3K
                    </h1>
                    <p>
                        Days of action.
                    </p>
                </div>
            </div>
            <div className="test">
                <div className="logo">
                    <img src={logo1} />
                </div>
                <div className="title">
                    <h1>
                        Our
                        <br></br>
                        Mission
                    </h1>
                </div>
                <div className="logo2">
                    <img src={logo1} />
                </div>
                <div className="name">
                    <img src={name1} />
                </div>
                <div className="logo3">
                    <img src={logo1} />
                </div>
                <div className="name2">
                    <img src={name1} />
                </div>
                <div className="description">
                    <p>
                        We often feel lost or hopeless when thinking <br></br> 
                        about what we can do to help the environment. <br></br>
                        When there's so many possible actions to take,<br></br>
                        it can feel as though each individual action is <br></br>
                        too insignificant, yet the whole system is too <br></br>
                        overwhelming. As a result, CuraEarth aims to  <br></br>
                        provide you with fun, planet-friendly, and <br></br>
                        impactful activities to fight against climate <br></br>
                        change. Together, we can achieve a cleaner <br></br>
                        and greener future. 
                    </p>
                </div>
                <div className="logo4">
                    <img src={logo1} />
                </div>
            </div>
        </div>
    )
}

export default about
