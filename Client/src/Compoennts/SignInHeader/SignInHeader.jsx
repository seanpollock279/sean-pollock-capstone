import React from 'react';
import '../SignInHeader/signinheader.scss';
import {Link} from 'react-router-dom';
import Logo from '../../Assets/Logo/OriginalLogo.png';

function SignInHeader () {
    return (
        <div className="header">
            <img className="header__logo" src={Logo} alt=""/>
        </div>
    )
}

export default SignInHeader;