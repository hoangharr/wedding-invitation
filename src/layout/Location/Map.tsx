// import data from 'data.json';
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface LeafletMapProps {
  center: [number, number];
  zoom: number;
  style?: React.CSSProperties;
}

function LocationButton() {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const map = useMap();

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const latLng = [pos.coords.latitude, pos.coords.longitude] as [number, number];
          setUserLocation(latLng);
          map.setView(latLng, map.getZoom()); // Center map on current location
        },
        (error) => {
          console.error("Error getting location:", error);
          // Handle error, e.g., alert the user
          alert("Error getting location. Please make sure location services are enabled.");
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <button onClick={handleLocationClick}>Show My Location</button>
  );
}

const Map: React.FC<LeafletMapProps> = ({ center, zoom, style }) => {
  const markerPosition: [number, number] = [21.0285, 105.8542];

  return (
    <MapContainer center={center} zoom={zoom} style={{ height: '400px', width: '100%', ...style }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={markerPosition}>
        <Popup>Nice!</Popup>
      </Marker>
      <LocationButton />
    </MapContainer>
  );
};

export default Map;
