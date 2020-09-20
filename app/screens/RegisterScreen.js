import React from "react";
import {
  ImageBackground,
  StyleSheet,
  TextInput,
  View,
  Alert,
  Text,
  TouchableOpacity,
} from "react-native";

function RegisterScreen() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/leaf.jpg")}
    >
      <View style={styles.bgOverlay} />
      <Text style={styles.logo}>Register Yourself!</Text>
      <View>
        <TextInput
          placeholder="Enter Name"
          style={styles.textInput}
          onChangeText={(text) => setName(text)}
          value={name}
          textAlign={"center"}
        />
        <TextInput
          placeholder="Enter Email"
          style={styles.textInput}
          onChangeText={(text) => setEmail(text)}
          value={email}
          textAlign={"center"}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Enter Password"
          style={styles.textInput}
          onChangeText={(text) => setPassword(text)}
          value={password}
          textAlign={"center"}
        />
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            Alert.alert(
              "Name: " + name + ", Email: " + email + ", Password: " + password
            );
            setName("");
            setEmail("");
            setPassword("");
          }}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Or Already Have An Account!</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
  bgOverlay: {
    backgroundColor: "black",
    position: "absolute",
    top: 0,
    right: 0,
    width: "200%",
    height: "100%",
    opacity: 0.5,
  },
  buttonContainer: {
    elevation: 8,
    backgroundColor: "#008954", // #065446
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginBottom: 14,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 14,
    fontSize: 16,
    color: "white",
    paddingHorizontal: 16,
    borderRadius: 20,
  },
});

export default RegisterScreen;
