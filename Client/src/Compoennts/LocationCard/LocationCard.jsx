import React from 'react';
import '../LocationCard/locationCard.scss';
import Location from '../Location/Location';
import {Link} from 'react-router-dom';

function LocationCard (props) {
    return (
            <div className="locationCard">
                    <img className="locationCard__img" src={props.img} alt=""/>
                <div className="locationCard__bottom">
                    <h1 className="locationCard__title">{props.location}</h1>
                    <p className="locationCard__text">{props.description}</p>
                    <Link to={`/locations/${props.id}`}><button className="locationCard__btn">Learn More</button></Link>
                </div>
            </div>
    )
}

export default LocationCard;