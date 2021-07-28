import React from 'react'
import '../../App.css'
import './Katalogu.css'
import DyerKatalog from '../DyerKatalog';
import GilinderaKatalog from '../GilinderaKatalog';
import TerasaKatalog from '../TerasaKatalog';
import Footer from '../Footer';
import KatalogCards from '../cards/KatalogCards';

function Katalogu() {
    return (
        <div className="gallery">
            {/* <h3 style={{color: 'aqua'}}>Kliko mbi fotografi për ta zmadhuar.</h3> */}
            <KatalogCards />
            <Footer />
        </div>
    );
}

export default Katalogu;