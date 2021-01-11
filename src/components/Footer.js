import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css'

function Footer() {
    return (
        <footer>
            <article>
                <section>
                    <div className="row">
                        <div className="coloumn">
                            <img className="footer-logo" src="images/logo.jpg" alt="Logo in the footer"/>
                        </div>
                        <div className="coloumn">
                            <ul className="social-media-footer">
                                <li><a href="tel:38344560885" target="_blank">Call us</a></li>
                                <li><a href="https://facebook.com/durajcom" target="_blank">Facebook</a></li>
                                <li><a href="https://instagram.com/durajcom" target="_blank">Instagram</a></li>
                                <li><a href="#" target="_blank">Youtube</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                    <p className="footer-rights">Të gjitha të drejtat janë të rezervuara <span className="name">DURAJ-COM&copy;{new Date().getFullYear()}</span>. Created and designed by <a href="https://facebook.com/veton.milaimi.587" target="_blank">Veton Milaimi</a> </p>
                </section>
            </article>
        </footer>
    );
}

export default Footer
