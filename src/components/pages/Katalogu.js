import React from 'react'
import '../../App.css'
import './Katalogu.css'
import DyerKatalog from '../DyerKatalog';
import GilinderaKatalog from '../GilinderaKatalog';

function Katalogu() {
    return (
        <div className="gallery">
            <DyerKatalog />
            <GilinderaKatalog />
        </div>
    );
}

export default Katalogu;