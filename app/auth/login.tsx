import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from "react-native";
import { useRouter } from "expo-router";
import { useTheme } from "../context/ThemeContext";

const logoImage = require("../../assets/images/fursa-logo.png");

const Login: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  const handleLogin = () => {
    if (!validateEmail(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      Alert.alert("Weak Password", "Password should be at least 6 characters.");
      return;
    }
    router.replace("/(tabs)");
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.header, isDarkMode && styles.darkText]}>Login</Text>


    console.log("Logging in with:", email, password);
    router.replace("/(tabs)"); 
  };

  return (
    <View style={styles.container}>
      <Image source={logoImage} style={styles.logo} />
      <Text style={styles.header}>Login</Text>

      <TextInput
        style={[styles.input, isDarkMode && styles.darkInput]}
        placeholder="Email"
        placeholderTextColor={isDarkMode ? "#ccc" : "#888"}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, isDarkMode && styles.darkInput]}
        placeholder="Password"
        placeholderTextColor={isDarkMode ? "#ccc" : "#888"}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

  container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#f5f5f5" },
  darkContainer: { backgroundColor: "#333" },
  header: { fontSize: 32, fontWeight: "bold", marginBottom: 20, textAlign: "center", color: "#333" },
  darkText: { color: "#fff" },
  input: { backgroundColor: "#fff", padding: 15, borderRadius: 10, marginBottom: 15, borderWidth: 1, borderColor: "#ddd" },
  darkInput: { backgroundColor: "#444", color: "#fff", borderColor: "#555" },
  button: { backgroundColor: "#6200ea", paddingVertical: 12, borderRadius: 25, alignItems: "center" },
  buttonText: { color: "white", fontSize: 18, fontWeight: "bold" },

  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: "contain",
    alignSelf: "center",
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    backgroundColor: "#6200ea",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

});

export default Login;
