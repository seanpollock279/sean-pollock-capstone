import React from 'react';

function LocationCard (props) {
    return (
        <div>
            <div>
                <img src="" alt=""/>
                <h1>{props.location}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default LocationCard;