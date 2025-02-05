// import data from 'data.json';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface LeafletMapProps {
  center: [number, number];
  zoom: number;
  style?: React.CSSProperties;
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
    </MapContainer>
  );
};

export default Map;
