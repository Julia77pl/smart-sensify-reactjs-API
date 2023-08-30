import React, { useState, useEffect }  from 'react';
import { 
  View,
  Text,
  StyleSheet,
} from 'react-native';

interface ISensor {
  _id: string;
  name: string;
  type: string[];
  isPublic: boolean;
  __v: number;
  secretKey?: string;
}

const SensorDetail: React.FC = ({route}: any) => {
  const [sensorData, setSensorData] = useState<ISensor | null>(null);
  
  const {sensorId} = route.params;

  useEffect(() => {
    fetch(`https://smartsensify.onrender.com/api/sensors/${sensorId}`)
      .then((response) => response.json())
      .then((json) => setSensorData(json.sensor))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      {sensorData && (
        <>
          <Text style={styles.title}>{sensorData.name}</Text>
          <Text>Type: {sensorData.type.join(', ')}</Text>
          <Text>Is Public: {sensorData.isPublic ? 'Yes' : 'No'}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SensorDetail;