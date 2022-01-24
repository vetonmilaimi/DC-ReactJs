import React from 'react';
import '../App.css';
import "./HeroSection.css";

function HeroSectionAbout() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>Rreth nesh</h1>
            <p>Duraj-com veprimtarin e saj e filloi në vitin 2003 si një biznes familjarë. </p>
        </div>
    )
}

export default HeroSectionAbout;