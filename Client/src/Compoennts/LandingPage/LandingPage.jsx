import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../Assets/Logo/OriginalLogo.png';
import '../LandingPage/landingpage.scss';

function LandingPage () {
    return (
        <>
            <div className="landing">
                <img className="landing__logo" src={Logo} alt=""/>
            
                <div className="landing__middleContainer">
                    <p className="landing__description">Looking for a spot for your next headshot session? Struggling to find a scenic location to photograph a bridal party?
                        Start here by searching by location, event or best time of day to shoot.
                    </p>
                    {/* <input className="landing__search" type="text"/>
                    <button className="landing__searchBtn">Seach</button> */}
                </div>
                <div className="landing__bottomContainer">
                    <h2 className="landing__quickMenu">Quick Glance</h2>
                    <Link to="/locations"><button className="landing__optionBtn">Toronto</button></Link>
                    <button className="landing__optionBtn">Montreal</button>
                    <button className="landing__optionBtn">Calgary</button>
                    <button className="landing__optionBtn">Vancouver</button>
                </div>
            </div>
            <div className="foot">

            </div>
        </>
    )
}

export default LandingPage;