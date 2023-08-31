import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';

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
    <MapView style={{ flex: 1 }} initialRegion={{latitude: 51.505, longitude: -0.09, latitudeDelta: 0.0922, longitudeDelta: 0.0421}}
    >
      {sensors.map((sensor) => (
        <Marker 
          coordinate={{latitude: sensor.location.lat, longitude: sensor.location.lng}}
          title={sensor.name} 
          description={'Type: ' + sensor.type.join(', ') + ', Is public: ' + (sensor.isPublic ? 'Yes' : 'No')}
          key={sensor._id}
        />
      ))}
    </MapView>
  );
};