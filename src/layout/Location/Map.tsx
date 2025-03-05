import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface LeafletMapProps {
  center: [number, number];
  zoom: number;
  style?: React.CSSProperties;
}

const Map: React.FC<LeafletMapProps> = ({ style }) => {
  const markerPosition1: [number, number] = [20.830055107170995, 106.69725040184687];
  const markerPosition2: [number, number] = [21.323209373795528, 105.38746251190094];

  const MapBounds = () => {
    const map = useMap();
    useEffect(() => {
      const paddingFactor = 0.05; // Adjust this factor to increase/decrease padding

    // Expand bounds slightly by adding/subtracting a small value
    const minLat = Math.min(markerPosition1[0], markerPosition2[0]) - paddingFactor;
    const maxLat = Math.max(markerPosition1[0], markerPosition2[0]) + paddingFactor;
    const minLng = Math.min(markerPosition1[1], markerPosition2[1]) - paddingFactor;
    const maxLng = Math.max(markerPosition1[1], markerPosition2[1]) + paddingFactor;

    map.fitBounds([
      [minLat, minLng],
      [maxLat, maxLng]
    ], { padding: [50, 50] }); // Add pixel padding
    }, [map]);
    return null;
  };

  return (
    <MapContainer
      // center={center}
      // zoom={zoom}
      style={{ height: '300px', width: '100%', marginTop: '20px', ...style }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={markerPosition1}>
        <Popup>Mai Hong Phuc Wedding Center</Popup>
      </Marker>
      <Marker position={markerPosition2}>
        <Popup>Bride's House</Popup>
      </Marker>
      <MapBounds />
    </MapContainer>
  );
};

export default Map;
