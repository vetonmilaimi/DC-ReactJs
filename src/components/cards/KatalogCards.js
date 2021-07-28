import React from 'react'

import { Button } from '../Button'
import { ButtonDyer } from '../ButtonDyer'
import { ButtonGilindera } from '../ButtonGilindera'
import { ButtonTerasa } from '../ButtonTerasa'

import './KatalogCards.css'

function KatalogCards() {
    return (
        <ul id="cards">
            <li className="card" id="card_1">
                <div className="card__content">
                    <div>
                        <h2>Dyer dhe Taraba</h2>
                        <p>Duraj-com ndër vite ka punuar lloje të ndryshme të dyerve dhe tarabave(rrethojave), kemi punuar dyer rreshqitëse me metodat më bashkohore dhe dyer që hapen në krahë. <br />Montimin e dyerve dhe të tarabave e bëjmë sipas dëshirës tuaj.  </p>
                        <ButtonDyer className='btns' buttonStyle='btn--outline'>
                            Më shumë...
                        </ButtonDyer>
                    </div>
                    <figure>
                        <img src="images/d1.jpg" alt="Image description" width="100%" />
                    </figure>
                </div>
            </li>
            <li className="card" id="card_2">
                <div className="card__content">
                    <div>
                        <h2>Card One</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p><a href="#top" className="btn btn--accent">Read more</a></p>
                    </div>
                    <figure>
                        <img src="images/d1.jpg" alt="Image description" width="100%" />
                    </figure>
                </div>
            </li>
            <li className="card" id="card_3">
                <div className="card__content">
                    <div>
                        <h2>Card One</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p><a href="#top" className="btn btn--accent">Read more</a></p>
                    </div>
                    <figure>
                        <img src="images/d1.jpg" alt="Image description" width="100%" />
                    </figure>
                </div>
            </li>
        </ul>
    );
}

export default KatalogCards;