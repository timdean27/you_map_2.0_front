import React, { useState } from 'react';
import { Marker } from '@react-google-maps/api';

const AddPin = ({ map, onPinAdded, onPinDeleted }) => {
  const [newPin, setNewPin] = useState(null);

  const handleMapRightClick = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    const newPin = { lat, lng };
    setNewPin(newPin);
    onPinAdded(newPin); // Add the new pin to the parent component's state
  };

  const handleMarkerClick = () => {
    if (newPin) {
      onPinDeleted(newPin);
      setNewPin(null);
    }
  };

  return (
    <>
      {newPin && <Marker position={newPin} onClick={handleMarkerClick} />}
      <div
        onContextMenu={handleMapRightClick}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -1,
        }}
      />
    </>
  );
};

export default AddPin;

