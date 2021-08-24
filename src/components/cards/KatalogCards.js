import React from 'react'

import { ButtonDyer } from '../ButtonDyer'
import { ButtonGilindera } from '../ButtonGilindera'
import { ButtonTerasa } from '../ButtonTerasa'

import './KatalogCards.css'

function KatalogCards() {
    return (
        <ul id="cards">
            <li className="card">
                <div className="card__content">
                    <div>
                        <h2>Dyer dhe Taraba</h2>
                        <p className="card_p_content">Duraj-com ndër vite ka punuar lloje të ndryshme të dyerve dhe tarabave(rrethojave), kemi punuar dyer rreshqitëse me metodat më bashkohore dhe dyer që hapen në krahë. <br />Montimin e dyerve dhe të tarabave e bëjmë sipas dëshirës tuaj.  </p>
                        <ButtonDyer className='btns' buttonStyle='btn--outline'>
                            Më shumë...
                        </ButtonDyer>
                    </div>
                    <figure>
                        <img src="images/d1.jpg" alt="Dyer dhe Taraba" width="100%" />
                    </figure>
                </div>
            </li>
            <li className="card">
                <div className="card__content">
                    <div>
                        <h2>Gilindera për shkallë</h2>
                        <p className="card_p_content">Bëjmë punimin dhe montimin e gilinderave për shkallë. Mund të zgjedhni modelet më të reja.</p>
                        <ButtonGilindera className='btns' buttonStyle='btn--outline'>
                            Më shumë...
                        </ButtonGilindera>
                    </div>
                    <figure>
                        <img src="images/sh2.jpg" alt="Gilindera per shkalle" width="100%" />
                    </figure>
                </div>
            </li>
            <li className="card">
                <div className="card__content">
                    <div>
                        <h2>Terasa</h2>
                        <p className="card_p_content">Bëjmë punimin dhe montimin e terasave. Mund të zgjedhni modelet më të reja.</p>
                        <ButtonTerasa className='btns' buttonStyle='btn--outline'>
                            Më shumë...
                        </ButtonTerasa>
                    </div>
                    <figure>
                        <img src="images/b3.jpg" alt="Terasa" width="100%" />
                    </figure>
                </div>
            </li>
        </ul>
    );
}

export default KatalogCards;