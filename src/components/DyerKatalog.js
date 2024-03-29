import React from 'react';
import { Link } from 'react-router-dom';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import Footer from './Footer';

function DyerKatalog() {
    return (
        <div className="gallery">
            <p className="gallery-back-link">
                <Link to="katalogu" className="gallery-back-link"><i className="fas fa-undo"></i> Kthehu pas te katalogu</Link>    
            </p>
            <h1>Dyer dhe Taraba</h1>
            <SimpleReactLightbox>
                <SRLWrapper>
                    <a href="images/d1.jpg" >
                        <img src="images/thumb-d1.jpg" alt="D1" />
                    </a>
                    <a href="images/d2.jpg">
                        <img src="images/thumb-d2.jpg" alt="D2" />
                    </a>
                    <a href="images/d3.jpg" >
                        <img src="images/thumb-d3.jpg" alt="D3" />
                    </a>
                    <a href="images/d4.jpg">
                        <img src="images/thumb-d4.jpg" alt="D4" />
                    </a>
                    <a href="images/d5.jpg" >
                        <img src="images/thumb-d5.jpg" alt="D5" />
                    </a>
                    <a href="images/d6.jpg">
                        <img src="images/thumb-d6.jpg" alt="D6" />
                    </a>
                    <a href="images/d7.jpg" >
                        <img src="images/thumb-d7.jpg" alt="D7" />
                    </a>
                    <a href="images/d2.jpg">
                        <img src="images/thumb-d2.jpg" alt="D2" />
                    </a>
                </SRLWrapper>
            </SimpleReactLightbox>
            <Footer />
        </div>
    );
}

export default DyerKatalog;