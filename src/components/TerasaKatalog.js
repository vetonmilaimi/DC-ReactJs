import React from 'react';
import { Link } from "react-router-dom";
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import Footer from './Footer';

function TerasaKatalog() {
    return (
        <div className="gallery">
            <p className="gallery-back-link">
                <Link to="katalogu" className="gallery-back-link"><i className="fas fa-undo"></i> Kthehu pas te katalogu</Link>
            </p>
            <h1>Terasa</h1>
            <SimpleReactLightbox>
                <SRLWrapper>
                    <a href="images/b1.jpg" >
                        <img src="images/thumb-b1.jpg" alt="D1" />
                    </a>
                    <a href="images/b2.jpg">
                        <img src="images/thumb-b2.jpg" alt="D2" />
                    </a>
                    <a href="images/b3.jpg" >
                        <img src="images/thumb-b3.jpg" alt="D3" />
                    </a>
                    <a href="images/b1.jpg">
                        <img src="images/thumb-b1.jpg" alt="D4" />
                    </a>
                    <a href="images/b2.jpg" >
                        <img src="images/thumb-b2.jpg" alt="D5" />
                    </a>
                    <a href="images/b2.jpg">
                        <img src="images/thumb-b2.jpg" alt="D2" />
                    </a>
                    <a href="images/b3.jpg" >
                        <img src="images/thumb-b3.jpg" alt="D3" />
                    </a>
                </SRLWrapper>
            </SimpleReactLightbox>
            <Footer />
        </div>
    );
}

export default TerasaKatalog;