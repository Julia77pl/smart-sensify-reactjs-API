import React, { useState } from 'react';
import { Button, Text, View, TextInput, FlatList } from 'react-native';

interface IDataReading {
  type: string;
  unit: string;
  value: string;
  _id: string;
}

interface IData {
  location: { x: string; y: string };
  _id: string;
  sensorId: string;
  timestamp: string;
  readings: IDataReading[];
  __v: number;
}

const SensorData: React.FC = () => {
  const [sensorId, setSensorId] = useState('');
  const [data, setData] = useState<IData | null>(null);

  const handleFetch = () => {
    fetch(`https://smartsensify.onrender.com/api/sensors/${sensorId}/data`)
      .then((response) => response.json())
      .then((json) => setData(json[0]));
  };

  return (
    <View>
      <TextInput placeholder="Enter sensor id" value={sensorId} onChangeText={setSensorId} />
      <Button title="Fetch data" onPress={handleFetch} />
      {data && (
        <View>
          <Text>Sensor ID: {data.sensorId}</Text>
          <Text>Timestamp: {data.timestamp}</Text>
          <Text>Location: {data.location.x}, {data.location.y}</Text>
          <FlatList
            data={data.readings}
            keyExtractor={item => item._id}
            renderItem={({ item }) => (
              <View>
                <Text>Type: {item.type}</Text>
                <Text>Unit: {item.unit}</Text>
                <Text>Value: {item.value}</Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default SensorData;