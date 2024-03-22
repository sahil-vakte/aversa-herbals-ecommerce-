import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
;

const MapContainer = () => {
  const mapStyles = {
    height: '400px',
    width: '100%'
  };

  const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
