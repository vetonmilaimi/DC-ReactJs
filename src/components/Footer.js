import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Pranoni nga ne ofertat më të reja duke bërë Subscribe më posht
                </p>
                <p className='footer-subscription-text'>
                    Mund të na bëni UnSubscribe në ç'do kohë.
                </p>
                <div className='input-areas'>
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Rreth Nesh</h2>
                        <Link to='/services'>Shërbimet </Link>
                        <Link to='/katalogu'>Katalogu i punimeve </Link>
                        <Link to='/contact'>Kontaktoni me ne</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Na kontaktoni</h2>
                        <Link to='/services'>Shërbimet </Link>
                        <Link to='/katalogu'>Katalogu i punimeve </Link>
                        <Link to='/contact'>Kontaktoni me ne</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Videot</h2>
                        <Link to='/services'>Shërbimet </Link>
                        <Link to='/katalogu'>Katalogu i punimeve </Link>
                        <Link to='/contact'>Kontaktoni me ne</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Rrjetet sociale</h2>
                        <Link to='/services'>Shërbimet </Link>
                        <Link to='/katalogu'>Katalogu i punimeve </Link>
                        <Link to='/contact'>Kontaktoni me ne</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            DURAJ-COM <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className="website-rights">DURAJ-COM © 2020.Created by:<a className="veton-rights" href="https://facebook.com/veton.milaimi.587" target="_blank"> Veton Milaimi</a></small>
                </div>
            </section>
        </div>
    );
}

export default Footer
