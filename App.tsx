import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import RegistrationScreen from './Register';
import Login2Screen from './Login';
import EmailScreen from './App2';
import MapWithSensors from './GetASensors';
import AddSensorComponent from './AddSensor';
import SensorDetail from './GetASensor';
import SensorDetail from './PutSensor';
import SensorData from './GetSensorData';
import DeleteSensor from './Delete';
import AddDataToSensor from './AddDataToSensor';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Login')}
        title="Zaloguj się"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function RegisterScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       onPress={() => navigation.navigate('Register')}
    </View>
  );
}

function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       onPress={() => navigation.navigate('Login')}
    </View>
  );
}

function AddDataToSensorScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       onPress={() => navigation.navigate('AddDataToSensor')}
    </View>
  );
}

function AddSensorScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       onPress={() => navigation.navigate('AddSensor')}
    </View>
  );
}

function GetASensorScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       onPress={() => navigation.navigate('GetASensor')}
    </View>
  );
}

function GetSensorDataScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       onPress={() => navigation.navigate('GetSensorData')}
    </View>
  );
}

function DeleteSensorScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       onPress={() => navigation.navigate('Delete')}
    </View>
  );
}




const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="SmartSensify">
        <Drawer.Screen name="SmartSensify" component={HomeScreen} />
        <Drawer.Screen name="Rejestracja" component={RegistrationScreen} />
		<Drawer.Screen name="Logowanie" component={Login2Screen} />
        <Drawer.Screen name="Wszystie czujniki" component={MapWithSensors} />
		<Drawer.Screen name="Dodaj czujnik " component={AddSensorComponent} />
		<Drawer.Screen name="Odbierz parametry od czujnika" component={SensorDetail} />
		<Drawer.Screen name="Odbierz dane od czujnika" component={SensorData} />
		<Drawer.Screen name="Dodaj dane do czujnika" component={PostSensorData} />
		<Drawer.Screen name="Zmien parametry czujnika" component={SensorDetail} />
		<Drawer.Screen name="Usuń czujnik" component={DeleteSensor} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;