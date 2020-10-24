import React from 'react';
import Header from '../Header/Header';
import axios from 'axios';
import './location.scss';
import Permit from '../Permit/Permit';
import Washrooms from '../Washrooms/Washrooms';
import Categories from '../Categories/Categories';
import Light from '../Light/Light';
import {Link} from 'react-router-dom';

class Location extends React.Component {
    state = {
        location: []
    }

    getLocation = () => {
        const locationId = this.props.match.params.id;
        axios.get('/locations/' + locationId)
            .then(res => {
                console.log(res.data)
                this.setState({
                    location : res.data
                })
            })  
    }

    componentDidMount() {
        this.getLocation();
    }

    render() {
        let location = this.state.location;
        return (
            <div>
                <Header />
                <div className="location">
                    <img className="location__img" src={location.img} alt=""/>
                    <div className="location__containerTop">
                        <h1 className="location__title">{location.location}</h1>
                        <p className="location__description">{location.description}</p>
                        <p className="location__address">{location.address}</p>
                        <hr className="location__hr"/>
                    </div>
                    <div className="location__containerBottom">
                        <h4 className="location__category">Categories</h4>
                            {/* <p>{location.categories}, </p> */}
                        <h4 className="location__label">Permit: <Permit permit={location.permit} /></h4>
                        <h4 className="location__label">Washrooms: <Washrooms washrooms={location.washrooms} /></h4>
                        <h4 className="location__label">Morning light: <Light morningLight={location.morningLight} eveningLight={location.eveningLight} /></h4>
                        <h4 className="location__label">Evening light: <Light morningLight={location.morningLight} eveningLight={location.eveningLight} /></h4>
                    </div>
                <Link to="/locations"><button className="location__back">Back to Locations</button></Link>
                </div>
            </div>
        )
    }
}

export default Location;