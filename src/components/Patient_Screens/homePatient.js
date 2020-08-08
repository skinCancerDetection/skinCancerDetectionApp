import React from "react";
import { StyleSheet, TouchableOpacity, View, Image, Alert } from "react-native";
import { Button, Icon, Text, theme } from "galio-framework";
import { MaterialIcons } from "@expo/vector-icons";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import Header from "../common/header";
import axios from "axios";
import { NavigationActions } from "@react-navigation/native";
export default class HomePatient extends React.Component {
  constructor(props) {
    super();
  }
  state = {
    image: null,
  };

  createTwoButtonAlert = () => {
    Alert.alert(
      "Skin Image",
      "Capture your skin image or upload it from a gallery!",
      [
        {
          text: "Camera",
          onPress: async () => {
            await Permissions.askAsync(Permissions.CAMERA);
            const { cancelled, uri } = await ImagePicker.launchCameraAsync({
              allowsEditing: false,
            });
            this.setState({ image: uri });
            console.log(uri);
          },
          style: "Camera",
        },
        {
          text: "Gallery",
          onPress: async () => {
            let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

            if (permissionResult.granted === false) {
              alert("Permission to access camera roll is required!");
              return;
            }

            let pickerResult = await ImagePicker.launchImageLibraryAsync();
            if (pickerResult.cancelled === true) {
              return;
            } else {
              this.setState({ image: pickerResult.uri });
            }
          },
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
  };
  predict = () => {
    axios
      .get("http://8deaf84a24c4.ngrok.io/image")
      .then((response) => {
        Alert.alert(
          "Benign keratosis-like lesions",
          "A seborrheic keratosis is a common noncancerous skin growth. Seborrheic keratoses are usually brown, black or light tan The growths look waxy,scaly and slightly raised. They usually appear on the head, neck, chest or back.",
          [{ text: "Ok" }, { text: "Cancel", style: "cancel" }],
          { cancelable: false }
        );
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <View>
        <Header drawer={this.props} title={"Home"} />
        <View style={styles.container}>
          <Text p style={styles.description} color={"#484a49"}>
            Upload or capture Image for your ubnormal skin ...
          </Text>

          <Image style={styles.image} source={{ uri: this.state.image }} />
        </View>
        <MaterialIcons
          name="photo-camera"
          size={45}
          color="#5E72E4"
          style={styles.camera}
          onPress={this.createTwoButtonAlert}
        />
        <MaterialIcons
          name="search"
          size={45}
          color="#5E72E4"
          style={styles.predict}
          onPress={this.predict}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 21,
  },
  row: { flexDirection: "row" },
  image: {
    width: 300,
    height: 300,
    backgroundColor: "#FFF",

    borderWidth: 5,
    borderColor: "#5E72E4",
  },

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  camera: {
    position: "absolute",
    bottom: -600,
    right: 30,
  },
  predict: {
    position: "absolute",
    bottom: -600,
    left: 30,
  },
  description: {
    fontWeight: "bold",
    justifyContent: "space-between",
    padding: 30,
    fontSize: 25,
  },
});
