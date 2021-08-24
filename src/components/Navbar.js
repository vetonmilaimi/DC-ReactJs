import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { Button } from './Button';
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
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                Rreth nesh
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Kontaktoni me ne
                            </Link>
                        </li>

                        {/* ################################################################## */}
                        {/* ################################################################## */}
                        {/* ################################################################# */}
                                {/* <li className='nav-item'>
                                    <Link to='/katalogu' className='nav-links-mobile' onClick={closeMobileMenu}>
                                        KATALOGU
                                    </Link>
                                </li> */}
                        {/* ################################################################## */}
                        {/* ################################################################## */}
                        {/* ################################################################## */}

                        <li className='nav-item'>
                            <Link to='/katalogu' className='nav-links' onClick={closeMobileMenu}>
                                KATALOGU
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="icon-bar">
                <a href="https://www.facebook.com/durajcom" className="facebook" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a>
                <a href="https://www.instagram.com/durajcom" className="instagram" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
                <a href="https://www.youtube.com/watch?v=lZeVZScC_qk" className="youtube" target="_blank" rel="noreferrer"><i className="fa fa-youtube"></i></a>
                <a href="mailto:veton.milaimi1@gmail.com" className="youtube" target="_blank" rel="noreferrer"><i className="fas fa-mail-bulk"></i></a>
                <a href="tel:+38344560885" className="telephone" target="_blank" rel="noreferrer"><i className="fas fa-phone-alt"></i></a>
            </div>
        </>
    );
}

export default Navbar;