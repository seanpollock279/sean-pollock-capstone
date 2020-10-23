import React from 'react';
import LocationCard from '../LocationCard/LocationCard';
import Header from '../Header/Header';
import axios from 'axios';

function MapPage (props) {
    let location = props.state.locations.locations;
    return (
        <>
            <Header />
            {location.map(location => 
                <LocationCard 
                location={location.location}
                description={location.description}
                img={location.img}
                id={location.id}
                />
            )}
        </>
    )
}

    // for more info clicked through from a specific card it will change dynamic url to /locations/:id 

export default MapPage;