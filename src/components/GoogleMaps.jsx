import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%', // Set the container width to take the full width of the parent
  height: '80vh', // Use a fixed height or percentage value to control the height
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Maps = ({ latitude, longitude }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCZaKUc5TnNrlQOUICqnINSBH3BNvUuwOE", // Replace with your API key
  });

  const center = { lat: latitude, lng: longitude };

  const [map, setMap] = useState(null); // Create a state variable for the map instance

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, [center]);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div>
      <div className='bg-dark' style={{ padding: '10px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.5)' }}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={8}
          mapTypeId='satellite'
          onLoad={onLoad} // Call the onLoad function here
          onUnmount={onUnmount}
        >
          <Marker position={center} icon={{ url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png" }} />
        </GoogleMap>
      </div>
    </div>
  ) : <></>;
};

export default React.memo(Maps);
