import React, { useState, useCallback } from 'react';
import { render } from 'react-dom';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'

function GilinderaKatalog() {
    return (
        <div className="gallery">
            <h1>Gilindera për shkallë</h1>
            <SimpleReactLightbox>
                <SRLWrapper>
                    <a href="images/sh1.jpg" >
                        <img src="images/thumb-sh1.jpg" alt="D1" />
                    </a>
                    <a href="images/sh2.jpg">
                        <img src="images/thumb-sh2.jpg" alt="D2" />
                    </a>
                    <a href="images/sh3.jpg" >
                        <img src="images/thumb-sh3.jpg" alt="D3" />
                    </a>
                    <a href="images/sh2.jpg">
                        <img src="images/thumb-sh2.jpg" alt="D2" />
                    </a>
                    <a href="images/sh1.jpg" >
                        <img src="images/thumb-sh1.jpg" alt="D1" />
                    </a>
                    <a href="images/sh2.jpg">
                        <img src="images/thumb-sh2.jpg" alt="D2" />
                    </a>
                    <a href="images/sh1.jpg" >
                        <img src="images/thumb-sh1.jpg" alt="D1" />
                    </a>
                    <a href="images/sh2.jpg">
                        <img src="images/thumb-sh2.jpg" alt="D2" />
                    </a>
                </SRLWrapper>
            </SimpleReactLightbox>
        </div>
    );
}
export default GilinderaKatalog;