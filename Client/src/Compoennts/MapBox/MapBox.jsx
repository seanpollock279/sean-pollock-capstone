import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import './mapbox.scss';
import Camera from '../../Assets/Icons/camera.svg';

export default function MapBox(props) {
    const {location} = props.location;
    console.log(location)

    const [viewport, setViewport] = useState({
        width: 500,
        height: '40vw',
        latitude: 43.637371,
        longitude: -79.457981,
        zoom: 12,
      });

    return (
        <div className="mapBox">
            <ReactMapGL className="mapBox__map" {...viewport} mapboxApiAccessToken={'pk.eyJ1Ijoic2VhbnBvbGxvY2siLCJhIjoiY2toZHV5MnRkMGM0ajJ4cGoxeGJjeHdmaCJ9.s6rqIVazeUxiBYVry-xefQ'}
        onViewportChange={viewport => {
            setViewport(viewport);
        }}
        mapStyle="mapbox://styles/seanpollock/ckhdwl9cm03qt1aqtm1ot9myc">
            {location !== undefined && <Marker latitude={43.637371} longitude={-79.457981}>
                <div><img src={Camera} alt=""/></div>
            </Marker>}
        </ReactMapGL>
        </div>

        
    )
}
