/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
 import React, { useState, useEffect } from 'react';
 import { View } from 'react-native';
 import MapView from 'react-native-maps';
 import axios from 'axios';
 
 type SensorType = 'Temperature' | 'Humidity';
 
 interface Sensor {
   _id: string;
   name: string;
   type: SensorType[];
   isPublic: boolean;
   __v: number;
   secretKey?: string;
 }
 
 const MapWithSensors: React.FC = () => {
   const [sensors, setSensors] = useState<Sensor[]>([]);
 
   useEffect(() => {
     axios.get('https://smartsensify.onrender.com/api/sensors')
       .then((response) => setSensors(response.data.sensors))
       .catch((error) => console.error(error));
   }, []);
 
   return (
     <View style={{ flex: 1 }}>
       <MapView style={{ flex: 1 }}>
         {sensors.map((sensor) => {
           return (
             <MapView.Marker
               key={sensor._id}
               coordinate={{
                 latitude: sensor.latitude, // Get this data from your API
                 longitude: sensor.longitude, // Get this data from your API
               }}
             >
               <MapView.Callout>
                 <Text>{sensor.name}</Text>
               </MapView.Callout>
             </MapView.Marker>
           )
         })}
       </MapView>
     </View>
   );
 }
 
 export default MapWithSensors;