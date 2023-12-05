import React, { useState, useRef } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import AddPin from './AddPin';

const MainMapContainer = () => {
  const mapStyles = {
    height: '50vh',
    width: '50%',
  };

  const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194,
  };

  const [pins, setPins] = useState([]);
  const mapRef = useRef(null);

  const handlePinAdded = (newPin) => {
    setPins([...pins, newPin]);
  };

  const handlePinDeleted = (pinToDelete) => {
    const updatedPins = pins.filter((pin) => pin !== pinToDelete);
    setPins(updatedPins);
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY_GOOGLE_MAPS}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        center={defaultCenter}
        zoom={10}
        onLoad={(map) => {
          // Store the map instance in the ref
          mapRef.current = map;
        }}
      >
        {pins.map((pin, index) => (
          <Marker key={index} position={pin} />
        ))}
        <AddPin map={mapRef.current} onPinAdded={handlePinAdded} onPinDeleted={handlePinDeleted} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MainMapContainer;
