import React from 'react'

import {Button} from '../Button'

function CardForm() {
    return (
        <div className="cards">
            <div className="card-container">
                <h1>Dyer dhe Taraba</h1>
                <img src="images/d1.jpg" alt="D1" width="70%" /> <br />
                <Button className='btns' buttonStyle='btn--outline'>
                    Më shumë...
                </Button>
            </div>
            <div className="card-container">
                <h1>Gilindera për shkallë</h1>
                <img src="images/sh3.jpg" alt="D2" width="70%" /> <br />
                <Button className='btns' buttonStyle='btn--outline'>
                    Më shumë...
                </Button>
            </div>
            <div className="card-container">
                <h1>Terasa</h1>
                <img src="images/b1.jpg" alt="B1" width="70%" /> <br />
                <Button className='btns' buttonStyle='btn--outline'>
                    Më shumë...
                </Button>
            </div>
        </div>
    );
}

export default CardForm;