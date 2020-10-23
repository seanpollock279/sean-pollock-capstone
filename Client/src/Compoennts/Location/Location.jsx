import React from 'react';
import Header from '../Header/Header';
import axios from 'axios';

class Location extends React.Component {
    state = {
        location: []
    }

    getLocation = () => {
        const locationId = this.props.match.params.id;
        axios.get('/locations/' + locationId)
            .then(res => {
                this.setState({
                    location : res.data
                })
            })  
    }

    componentDidMount() {
        this.getLocation();
    }

    render() {
        return (
            <div>
                <Header />
                <div className="location">
                    <img className="location__img" src="" alt=""/>
                    <div className="location__containerTop">
                        <h1 className="location__title"></h1>
                        <p className="location__description"></p>
                        <p className="location__address"></p>
                    </div>
                    <div className="location__containerBottom">
                        <h4 className="location__">Categories</h4>
                            <li></li>
                        <h4>Permit: </h4>
                        <h4>washrooms: </h4>
                        <h4>Morning light: </h4>
                        <h4>Evening light: </h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Location;