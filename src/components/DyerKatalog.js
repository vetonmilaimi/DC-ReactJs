import React, { useState, useCallback } from 'react';
import { render } from 'react-dom';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'

function DyerKatalog() {
    return (
        <div className="gallery">
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
                    <a href="images/rr1.jpg">
                        <img src="images/thumb-rr1.jpg" alt="D2" />
                    </a>
                    <a href="images/rr2.jpg" >
                        <img src="images/thumb-rr2.jpg" alt="D1" />
                    </a>
                    <a href="images/rr3.jpg">
                        <img src="images/thumb-rr3.jpg" alt="D2" />
                    </a>
                    <a href="images/d1.jpg" >
                        <img src="images/thumb-d1.jpg" alt="D1" />
                    </a>
                    <a href="images/d2.jpg">
                        <img src="images/thumb-d2.jpg" alt="D2" />
                    </a>
                </SRLWrapper>
            </SimpleReactLightbox>
        </div>
    );
}

export default DyerKatalog;