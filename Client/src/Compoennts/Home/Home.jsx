import React from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
// import '@react-google-maps/api';
// import '@reach/combobox/styles.css';
import mapStyle from '../../mapStyle';

// two APis 
// Map api and places api

const libraries = ['places'];
const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
}
const center = {
    lat: 43.653225,
    lng: -79.383186,
}
const options = {
    styles: mapStyle,
}

function Home () {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.API_GOOGLE_MAPS_KEY,
        libraries,
    });

    if (loadError) return "Error lading maps";
    if (!isLoaded) return "Loading Maps";

    return (
        <>
            <GoogleMap  
                mapContainerStyle={mapContainerStyle}
                zoom={8}
                center={center}
                options={options}

            />
        </>
    )
}

export default Home;
