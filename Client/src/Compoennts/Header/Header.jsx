import React from 'react';
import '../Header/header.scss';
import {Link} from 'react-router-dom';
import Logo from '../../Assets/Logo/OriginalLogo.png';

function Header () {
    return (
        <div className="header">
            <img className="header__logo" src={Logo} alt=""/>
            <div className="header__rightContainer">
                <nav className="header__nav">
                <Link className="header__link" to="/"><li className="header__navItem">Home</li></Link>
                <Link className="header__link" to="/about"><li className="header__navItem">About</li></Link>
                </nav>
                <Link className="header__link" to="/upload"><button className="header__addBtn">Add Location</button></Link>
            </div>
        </div>
    )
}

export default Header;