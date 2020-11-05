import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../Assets/Logo/OriginalLogo.png';
import '../LandingPage/landingpage.scss';
import Toronto from '../../Assets/Imgs/berkay-gumustekin-hRg1KL4-AUE-unsplash.jpg';
import Montreal from '../../Assets/Imgs/daniel-baylis-WiMzEOsQNoc-unsplash.jpg';
import Calgary from '../../Assets/Imgs/kyler-nixon-_ZBekGTBh-c-unsplash.jpg';
import Vancouver from '../../Assets/Imgs/lee-robinson-MzCeUhY3Xy0-unsplash.jpg';

function LandingPage () {
    return (
        <>
            <div className="landing">
                <img className="landing__logo" src={Logo} alt=""/>
            
                <div className="landing__middleContainer">
                    <p className="landing__description">Looking for a spot for your next headshot session? Struggling to find a scenic location to photograph a bridal party?
                        Start here by searching by location, event or best time of day to shoot.
                    </p>
                </div>
                <div className="landing__bottomContainer">
                    <h2 className="landing__quickMenu">Quick Glance</h2>
                        <Link className="locationLink" to="/locations"><div className="imgTest">
                            <img className="imgTest__test" src={Toronto} alt="berkay-gumustekin-hRg1KL4-AUE-unsplash"/>
                            <button className="imgTest__optionBtn">Toronto</button>
                        </div></Link>
                        <Link className="locationLink" to="/locations"><div className="imgTest">
                            <img className="imgTest__test" src={Montreal} alt="daniel-baylis-WiMzEOsQNoc-unsplash"/>
                            <button className="imgTest__optionBtn">Montreal</button>
                        </div></Link>
                        <Link className="locationLink" to="/locations"><div className="imgTest">
                            <img className="imgTest__test" src={Calgary} alt="kyler-nixon-_ZBekGTBh-c-unsplash.jpg"/>
                            <button className="imgTest__optionBtn">Calgary</button>
                        </div></Link>
                        <Link className="locationLink" to="/locations"><div className="imgTest">
                            <img className="imgTest__test" src={Vancouver} alt="lee-robinson-MzCeUhY3Xy0-unsplash"/>
                            <button className="imgTest__optionBtn">Vancouver</button>
                        </div></Link>
                </div>
                
            </div>
            <div className="foot">

            </div>
        </>
    )
}

export default LandingPage;