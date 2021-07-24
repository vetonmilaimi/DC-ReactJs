import React from 'react';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'

function TerasaKatalog() {
    return (
        <div className="gallery">
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
        </div>
    );
}

export default TerasaKatalog;