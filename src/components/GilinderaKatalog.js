import React from 'react';
import { Link } from "react-router-dom";
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import Footer from './Footer';

function GilinderaKatalog() {
    return (
        <div className="gallery">
            <p className="gallery-back-link">
                <Link to="katalogu" className="gallery-back-link"><i className="fas fa-undo"></i> Kthehu pas te katalogu</Link>
            </p>
            <h1>Gilindera për shkallë</h1>
            <SimpleReactLightbox>
                <SRLWrapper>
                    <a href="images/sh1.jpg" >
                        <img src="images/thumb-sh1.jpg" alt="SH1" />
                    </a>
                    <a href="images/sh2.jpg">
                        <img src="images/thumb-sh2.jpg" alt="SH2" />
                    </a>
                    <a href="images/sh3.jpg" >
                        <img src="images/thumb-sh3.jpg" alt="SH3" />
                    </a>
                    <a href="images/sh4.jpg">
                        <img src="images/thumb-sh4.jpg" alt="SH4" />
                    </a>
                    <a href="images/sh5.jpg" >
                        <img src="images/thumb-sh5.jpg" alt="SH5" />
                    </a>
                    <a href="images/sh2.jpg">
                        <img src="images/thumb-sh2.jpg" alt="SH2" />
                    </a>
                    <a href="images/sh3.jpg" >
                        <img src="images/thumb-sh3.jpg" alt="SH3" />
                    </a>
                    <a href="images/sh4.jpg">
                        <img src="images/thumb-sh4.jpg" alt="SH4" />
                    </a>
                </SRLWrapper>
            </SimpleReactLightbox>
            <Footer />
        </div>
    );
}
export default GilinderaKatalog;