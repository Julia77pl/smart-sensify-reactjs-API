import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";

interface LoginProps {}

const Loginscr: React.FC<LoginProps> = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const sendData = async () => {
    try {
      const response = await fetch('https://smartsensify.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        })
      });

      const json = await response.json();

      if (response.ok) {
        Alert.alert("Zalogowano", json.message);
      } else {
        // Niepowodzenie logowania
        Alert.alert("Error", json.message);
      }

    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
      />
      <TextInput 
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        placeholder="Password"
      />
      <Button title="Log In" onPress={sendData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10
  }
})

export default Loginscr;