import React from 'react'
import '../../App.css'
import Footer from '../Footer';
import HeroSectionAbout from '../HeroSectionAbout';

function About() {
    return (
        <div style={{textAlign: 'center'}}>
            <HeroSectionAbout />
            <Footer />
        </div>
    );
}

export default About;