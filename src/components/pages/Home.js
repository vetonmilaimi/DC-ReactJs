import React from 'react';

import '../../App.css';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import CardTemplate from '../cards/CardTemplate';

function Home () {
    return (
        <>
            <HeroSection />
            <CardTemplate />
            <Footer />
        </>
    )
}

export default Home;