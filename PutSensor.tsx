import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

interface ISensor {
  _id: string;
  name: string;
  type: string[];
  isPublic: boolean;
  __v: number;
  secretKey?: string;
}

export const SensorDetail: React.FC<{ id: string }> = ({ id }) => {
  const [sensor, setSensor] = useState<ISensor | null>(null);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [isPublic, setIsPublic] = useState(false);

  useEffect(() => {
    fetch(`https://smartsensify.onrender.com/api/sensors/${id}`)
      .then(response => response.json())
      .then(sensor => {
        setSensor(sensor);
        setName(sensor.name);
        setType(sensor.type.join(', '));
        setIsPublic(sensor.isPublic);
      });
  }, []);
  
  const updateSensor = () => {
    fetch(`https://smartsensify.onrender.com/api/sensors/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        type: type.split(', ').map((t: string) => t.trim()),
        isPublic: isPublic
      }),
    })
      .then(response => response.json())
      .then(sensor => {
        setSensor(sensor);
        setName(sensor.name);
        setType(sensor.type.join(', '));
        setIsPublic(sensor.isPublic);
      })
      .catch((error) => {
        Alert.alert('Error', 'An error occurred while updating the sensor.')
      });
  }

  return (
    <View>
      {
        sensor ?
        <View>
          <Text>{sensor.name}</Text>
          <TextInput value={name} onChangeText={(text) => setName(text)} />
          <Text>{sensor.type.join(', ')}</Text>
          <TextInput value={type} onChangeText={(text) => setType(text)} />
          <Text>{sensor.isPublic ? 'Public' : 'Private'}</Text>
          <Button title={isPublic ? 'Public' : 'Private'} onPress={() => setIsPublic(!isPublic)} />
          <Button title="Update" onPress={updateSensor} />
        </View>
        :
        <Text>Loading...</Text>
      }
    </View>
  );
};