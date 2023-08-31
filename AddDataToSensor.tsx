import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

interface ISensorData {
  secretKey: string;
  data: {
    sensorId: string;
    timestamp: string;
    location: {
      x: string;
      y: string;
    },
    readings: [{
      type: string;
      unit: string;
      value: string;
    }],
  };
}

export const SensorDataForm: React.FC = () => {
  // Initializng state for each field
  const [secretKey, setSecretKey] = useState('');
  const [sensorId, setSensorId] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [type, setType] = useState('');
  const [unit, setUnit] = useState('');
  const [value, setValue] = useState('');

  // Function to send data
  const sendData = async (sensorData: ISensorData) => {
    try {
      const response = await fetch('https://smartsensify.onrender.com/api/sensors/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sensorData)
      });
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View>
      <TextInput placeholder="Secret Key" onChangeText={setSecretKey} />
      <TextInput placeholder="Sensor ID" onChangeText={setSensorId} />
      <TextInput placeholder="Timestamp" onChangeText={setTimestamp} />
      <TextInput placeholder="Location X" onChangeText={setX} />
      <TextInput placeholder="Location Y" onChangeText={setY} />
      <TextInput placeholder="Type" onChangeText={setType} />
      <TextInput placeholder="Unit" onChangeText={setUnit} />
      <TextInput placeholder="Value" onChangeText={setValue} />
      <Button
        title="Submit"
        onPress={() =>
          sendData({
            secretKey,
            data: {
              sensorId,
              timestamp,
              location: {
                x,
                y,
              },
              readings: [
                {
                  type,
                  unit,
                  value,
                },
              ],
            },
          })
        }
      />
    </View>
  );
};