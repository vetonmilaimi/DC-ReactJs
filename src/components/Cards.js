import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Shikoni disa nga modelet tona më të kërkuara</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards_items">
                        <CardItem 
                            src="images/d1.jpg"
                            text="Cilësia, bukuria, kualiteti dhe mbi të gjitha siguria e garantuar... Mos harroni i gjeni vetëm tek ne.!"
                            label='Derë Oborri'
                            path='/services'
                        />
                        <CardItem 
                            src="images/sh1.jpg"
                            text="Cilësia, bukuria, kualiteti dhe mbi të gjitha siguria e garantuar... Mos harroni i gjeni vetëm tek ne.! "
                            label='Gilindera për shkallë'
                            path='/services'
                        />
                    </ul>

                    <ul className="cards_items">
                        <CardItem 
                            src="images/b1.jpg"
                            text="Cilësia, bukuria, kualiteti dhe mbi të gjitha siguria e garantuar... Mos harroni i gjeni vetëm tek ne.!"
                            label='Terasa'
                            path='/services'
                        />
                        <CardItem 
                            src="images/rr1.jpg"
                            text="Cilësia, bukuria, kualiteti dhe mbi të gjitha siguria e garantuar... Mos harroni i gjeni vetëm tek ne.! "
                            label='Rrethojë për oborrë'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
