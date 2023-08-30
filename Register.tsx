/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
 import React, { useState } from 'react';
 import { Button, TextInput, View } from 'react-native';
 import { createDrawerNavigator } from '@react-navigation/drawer';
 import { NavigationContainer } from '@react-navigation/native';

 const Drawer = createDrawerNavigator();
 
 const RegistrationScreen: React.VFC = () => {
   const [userName, setUserName] = useState<string>('');
   const [email, setEmail] = useState<string>('');
   const [password, setPassword] = useState<string>('');
 
   const onRegister = async () => {
     try {
       const response = await fetch('https://smartsensify.onrender.com/api/auth/register', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
           username: userName,
           email: email,
           password: password
         })
       });
       const data = await response.json();
       console.log(data);
     } catch (error) {
       console.error("Error:", error);
     }
   }
  
   return (
     <View>
       <TextInput
         placeholder="Username"
         value={userName}
         onChangeText={setUserName}
       />
       <TextInput
         placeholder="Email"
         value={email}
         onChangeText={setEmail}
       />
       <TextInput
         placeholder="Password"
         value={password}
         onChangeText={setPassword}
         secureTextEntry
       />
       <Button title="Register" onPress={onRegister} />
     </View>
   );
 }
 
 export default RegistrationScreen;