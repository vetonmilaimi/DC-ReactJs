import React from 'react';
import '../App.css'
import { Button } from './Button';
import "./HeroSection.css";

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>DURAJ-COM</h1>
            <p>Ne e njohim mirë gjuhën e hekurit, tradita vazhdon, kualiteti na mbanë</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Shiko Katalogun këtu <i className="far fa-file-image"></i>
                </Button>
                <br/>
                <button className="btn--primary btn--large">
                    <a href="https://ufile.io/jjd04lde">Shkarko Katalogun  </a><i className="fas fa-download"></i>
                </button>
            </div>
        </div>
    )
}

export default HeroSection;
