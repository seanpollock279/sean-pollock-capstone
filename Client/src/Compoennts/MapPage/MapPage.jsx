import React from 'react';
import LocationCard from '../LocationCard/LocationCard';
import Header from '../Header/Header';
import axios from 'axios';

class MapPage extends React.Component {
    state = {
        locations: []
    }

    componentDidMount() {
        axios.get('/locations')
            .then(res => {
                this.setState({
                    locations: res.data
                })
            })
    }

    // for more info clicked through from a specific card it will change dynamic url to /locations/:id 


    render() {
        let locations = this.state.locations;
        console.log(locations)
        return (
            this.state.locations.locations !== undefined &&
            <>
                <Header />
                {locations.locations.map(location => 
                    <LocationCard 
                    location={location.location}
                    description={location.description}
                    img={location.img}
                    />
                )}
            </>
        )
    }
}

export default MapPage;