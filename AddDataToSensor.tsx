import React from 'react';

interface ISensorData {
  secretKey: string;
  data: {
    sensorId: string;
    timestamp: string;
    location: {
      x: string;
      y: string;
    };
    readings: {
      type: string;
      unit: string;
      value: string;
    }[];
  };
}

const PostSensorData: React.FC = () => {
  const sensorData: ISensorData = {
    secretKey: 'your_secret_key',
    data: {
      sensorId: 'your_sensor_id',
      timestamp: '2023-08-30T23:12:29.161Z',
      location: {
        x: 'your_location_x',
        y: 'your_location_y',
      },
      readings: [
        {
          type: 'your_type',
          unit: 'your_unit',
          value: 'your_value',
        },
      ],
    },
  };

  const postData = async () => {
    try {
      const response = await fetch('https://smartsensify.onrender.com/api/sensors/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sensorData),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Oops! Something went wrong:', error);
    }
  };

  return (
    <button onClick={postData}>Post Sensor Data</button>
  );
};

export default PostSensorData;