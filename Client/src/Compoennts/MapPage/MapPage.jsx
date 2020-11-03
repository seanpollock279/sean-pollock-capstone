import React from 'react';
import LocationCard from '../LocationCard/LocationCard';
import Header from '../Header/Header';
import axios from 'axios';
import './mapPage.scss';

function MapPage (props) {
    let location = props.state.locations.locations;
    return (
        <>
            <Header />
            <div className="Cards">
                {location.map(location => 
                    <LocationCard 
                    location={location.location}
                    description={location.description}
                    img={location.img}
                    id={location.id}
                    key={location.id}
                    />
                )}
            </div>
        </>
    )
}

    // for more info clicked through from a specific card it will change dynamic url to /locations/:id 

export default MapPage;