import React from 'react';
import LocationCard from '../LocationCard/LocationCard';
import Header from '../Header/Header';
import axios from 'axios';

class MapPage extends React.Component {
    state = {
        locations: []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/locations')
            .then(res => {
                this.setState({
                    locations: res.data
                })
            })
    }

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
                    />
                )}
            </>
        )
    }
}

export default MapPage;