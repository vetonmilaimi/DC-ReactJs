import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import "./Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        DURAJ-COM
                    </Link>
                    <div className="menu-icon" onClick={handleClick} >
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Ballina
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Sherbimet
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Kontaktoni me ne
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/katalogu' className='nav-links-mobile' onClick={closeMobileMenu}>
                                KATALOGU
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>KATALOGU</Button>}
                </div>
            </nav>

            <div className="icon-bar">
                <a href="https://www.facebook.com/veton.milaimi.587/" className="facebook"><i className="fa fa-facebook"></i></a>
                <a href="https://www.instagram.com/veton.milaimi/" className="instagram"><i className="fa fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/veton-milaimi-171a24174/i" className="linkedin"><i className="fa fa-linkedin"></i></a>
                <a href="https://www.youtube.com/channel/UCXol91t3TnMIT1Uh-h7Qn7A" className="youtube"><i className="fa fa-youtube"></i></a>
                <a href="mailto:veton.milaimi1@gmail.com" className="youtube"><i className="fas fa-mail-bulk"></i></a>
                <a href="tel:+38343932432" className="telephone"><i className="fas fa-phone-alt"></i></a>
            </div>
        </>
    );
}

export default Navbar;  