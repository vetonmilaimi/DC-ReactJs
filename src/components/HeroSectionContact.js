import React from 'react';
import '../App.css';
import './ContactForm.css';
import "./HeroSection.css";

function HeroSectionContact() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>DURAJ-COM Kontaktoni me ne</h1>
            <p>Ne e njohim mirë gjuhën e hekurit, tradita vazhdon, kualiteti na mbanë</p>
            <div className="contact-card">
                <h3>
                    Për të kontaktuar me ne është më e thjesht se kurr më parë. <br/>
                    Ju thjesht mund të na telefononi në numrat tanë të telefonit: <br/>
                    Prizren -- **044-388-994** <br/>
                    Bresanë -- **044-560-885** dhe **048 599 113**<br/>
                    Gjithashtu mundeni të na shkruani në Viber: <br/>
                    **+383 44 560 885** <br/>
                    **+383 48 599 113** <br/>
                </h3>
            </div>
        </div>
    )
}

export default HeroSectionContact;
