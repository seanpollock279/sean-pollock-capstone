import React from 'react';
import '../LocationCard/locationCard.scss';

function LocationCard (props) {
    return (
        <div className="background">
            <div className="locationCard">
                <div className="locationCard__top">
                    <img className="locationCard__img" src={props.img} alt=""/>
                </div>
                <div className="locationCard__bottom">
                    <h1 className="locationCard__title">{props.location}</h1>
                    <p className="locationCard__text">{props.description}</p>
                    <button className="locationCard__btn">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default LocationCard;