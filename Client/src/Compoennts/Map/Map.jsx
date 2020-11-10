import React from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css';
import Pin from '../Pin/Pin';

export default function Map(props) {
    
    return (
        <>
            <h1>Title</h1>
            <div style={{ height: '60vh', width: '85%' }} className="google-map">
                <GoogleMapReact 
                    bootstrapURLKeys={{ key: 'AIzaSyAZAyEup8SoVritkXX_zxM9ELPtBiFoK3c'}}
                    center={{lat: props.location.latitude, lng: props.location.longitude}}
                    defaultZoom={17}>
                        {/* <Pin 
                            lat={mapOptions.center.lat}
                            lng={mapOptions.center.lng}
                            text={props.location.address}/> */}
                </GoogleMapReact>
            </div>
        </>
    )
}
 
// AIzaSyAZAyEup8SoVritkXX_zxM9ELPtBiFoK3c

// default center is locaton which is
// an object that contains adress, lat, long
// I can get all that from my api
// zoom level is an integer between 0-20 so I can set this accordingly
