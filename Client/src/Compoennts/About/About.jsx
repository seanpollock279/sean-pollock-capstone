import React from 'react';
import Header from '../Header/Header';
import Profile from '../../Assets/Imgs/20201021-PJR_3440.jpg';
import ReactImg from '../../Assets/Imgs/React-01.png';
import NPMImg from '../../Assets/Imgs/Npm-01.png';
import NodeImg from '../../Assets/Imgs/Node-JS-01.png';
import NodeSImg from '../../Assets/Imgs/Node-sass-01.png';
import ExpressImg from '../../Assets/Imgs/Express-01.png';
import '../About/about.scss';


function About () {
    return (
        <div>
            <Header />
            <div className="aboutInfo">
                <img className="aboutInfo__profile" src={Profile} alt="photo of author"/>
                <h2 className="aboutInfo__title">Sean Pollock</h2>
                <p className="aboutInfo__description">I'm a photographer turned web developer from Toronto, Ontario. My hope is that this app helps photographers find a location for their next shoot and encourages them to seek out new locations to share with their peers.</p>
            </div>
            <h3 className="aboutInfo__subTitle">App developed with:</h3>
            <div className="aboutInfo__tools">
                <img className="aboutInfo__tool" src={ReactImg} alt=""/>
                <img className="aboutInfo__tool" src={NPMImg} alt=""/>
                <img className="aboutInfo__tool" src={NodeImg} alt=""/>
                <img className="aboutInfo__tool" src={NodeSImg} alt=""/>
                <img className="aboutInfo__tool" src={ExpressImg} alt=""/>
            </div>
        </div>
    )
}

export default About;