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
      map.fitBounds([markerPosition1, markerPosition2]);
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
