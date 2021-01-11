import React from 'react'
import '../../App.css'
import './Katalogu.css'
import DyerKatalog from '../DyerKatalog';
import GilinderaKatalog from '../GilinderaKatalog';
import Footer from '../Footer';

function Katalogu() {
    return (
        <div className="gallery">
            <DyerKatalog />
            <GilinderaKatalog />
            <Footer />
        </div>
    );
}

export default Katalogu;