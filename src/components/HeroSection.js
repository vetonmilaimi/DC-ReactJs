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
                    SHIKO VIDEO <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
