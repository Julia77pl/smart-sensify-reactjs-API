import * as React from 'react';
import { useState } from 'react';
import { Button, View, TextInput, Text } from 'react-native';

const AddSensorComponent: React.FC = () => {
  const [sensorName, setSensorName] = useState<string>("");
  const [sensorType, setSensorType] = useState<string>("");
  const [isPublic, setIsPublic] = useState<boolean>(false);
 
  const addSensor = async () => {
    const sensorData = {
      "name": sensorName,
      "type": sensorType,
      "isPublic": isPublic,
    };

    await fetch('https://smartsensify.onrender.com/api/sensors', 
                {
                  method: 'POST', 
                  headers: {
                    'Content-Type': 'application/json'
                  }, 
                  body: JSON.stringify(sensorData) 
                });
  };
 
  return (
    <View>
      <Text>Add Sensor:</Text>
      <TextInput
        value={sensorName}
        onChangeText={setSensorName}
        placeholder="Sensor Name"
      />
      <TextInput
        value={sensorType}
        onChangeText={setSensorType}
        placeholder="Sensor Type"
      />
      <Button
        title="Public"
        onPress={() => setIsPublic(previousState => !previousState)}
      />
      <Button
        title="Add Sensor"
        onPress={addSensor}
      />

    </View>
  );
};

export default AddSensorComponent;