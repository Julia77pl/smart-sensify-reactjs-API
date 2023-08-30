import React, { useState } from 'react';
import { Button, TextInput, View, Alert } from 'react-native';

export const DeleteSensor: React.FC = () => {
  const [sensorId, setSensorId] = useState<string>('');

  const handleDelete = async () => {
    try {
      await fetch(`https://smartsensify.onrender.com/api/sensors/${sensorId}`, {
        method: 'DELETE',
      });
      Alert.alert('Success', 'Sensor has been deleted successfully.');
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
  };

  return (
    <View>
      <TextInput
        value={sensorId}
        onChangeText={setSensorId}
        placeholder="Enter sensor ID"
      />
      <Button title="Delete Sensor" onPress={handleDelete} />
    </View>
  );
};