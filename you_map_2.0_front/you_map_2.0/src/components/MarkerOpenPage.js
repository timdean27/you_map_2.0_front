// MarkerOpenPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MarkerPhotoPage from "./MarkerPhotoPage"

const MarkerOpenPage = ({ marker }) => {
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    // Function to perform reverse geocoding
    const reverseGeocode = async () => {
        const { lat, lng } = marker;
        const apiKey = process.env.REACT_APP_API_KEY_GOOGLE_MAPS;
      
        try {
          const response = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
          );
      
          console.log('Geocoding API Response:', response.data);
      
          // Check if the response and its data exist before accessing properties
          if (response.data && response.data.results && response.data.results.length > 0) {
            setLocationData(response.data.results[0]);
          } else {
            console.error('No geocoding results found.');
          }
        } catch (error) {
          console.error('Error fetching reverse geocoding data:', error.message);
        }
      };
      

    reverseGeocode();
  }, [marker]);

  return (
    <div>
      <h4>Marker Information</h4>
      <MarkerPhotoPage/>
      <p>Latitude: {marker.lat}</p>
      <p>Longitude: {marker.lng}</p>
      {locationData && (
        <>
          <p>Formatted Address: {locationData.formatted_address}</p>
          {/* Add more location information as needed */}
        </>
      )}
    </div>
  );
};

export default MarkerOpenPage;

