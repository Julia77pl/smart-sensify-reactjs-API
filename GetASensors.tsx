import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

interface ISensor {
  _id: string;
  name: string;
  type: string[];
  isPublic: boolean;
  __v: number;
  secretKey?: string;
  location: {lat: number; lng: number}; // Dodane, ale nie jest to na pewno w rzeczywistości
}

export const MapWithSensors: React.FC = () => {
  const [sensors, setSensors] = useState<ISensor[]>([]);

  useEffect(() => {
    fetch('https://smartsensify.onrender.com/api/sensors')
      .then(response => response.json())
      .then(response => setSensors(response.sensors));
  }, []);

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {sensors.map((sensor) => (
        <Marker key={sensor._id} position={sensor.location}>
          <Popup>
            <strong>{sensor.name}</strong>
            <br />
            <em>Type: {sensor.type.join(', ')}</em>
            <br />
            <small>Is Public: {sensor.isPublic ? 'Yes' : 'No'}</small>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};