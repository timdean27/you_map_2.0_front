import React, { useState, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import MarkerOpenPage from './MarkerOpenPage';
const MainMapContainer = () => {
    const mapStyles = {
        height: '50vh',
        width: '50%',
    };

    const defaultCenter = {
        lat: 37.7749,
        lng: -122.4194,
    };

    const [markers, setMarkers] = useState([]);
    const [selectedMarker, setSelectedMarker] = useState(null);
    const mapRef = useRef(null);

    const handleMapRightClick = (e) => {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
        const newMarker = { lat, lng };
        setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
    };

    const handleMarkerClick = (marker) => {
        setSelectedMarker(marker);
    };

    const handleInfoWindowClose = () => {
        setSelectedMarker(null);
    };

    const handleDeleteMarker = () => {
        setMarkers((prevMarkers) => prevMarkers.filter((marker) => marker !== selectedMarker));
        setSelectedMarker(null);
    };

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY_GOOGLE_MAPS}>
          <GoogleMap
            mapContainerStyle={mapStyles}
            center={defaultCenter}
            zoom={10}
            onLoad={(map) => {
              mapRef.current = map;
              mapRef.current.addListener('rightclick', handleMapRightClick);
            }}
          >
            {markers.map((marker, index) => (
              <Marker
                key={index}
                position={marker}
                onClick={() => handleMarkerClick(marker)}
              />
            ))}
    
            {selectedMarker && (
              <InfoWindow
                position={selectedMarker}
                onCloseClick={handleInfoWindowClose}
              >
                <MarkerOpenPage marker={selectedMarker} />
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      );
    };

export default MainMapContainer;

