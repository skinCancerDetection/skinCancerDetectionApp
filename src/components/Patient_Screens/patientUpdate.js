import React from "react";
import axios from "axios";
import {
  Alert,
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  ImageBackground,
} from "react-native";
// galio component
import { Block, Button, Input, Text, NavBar } from "galio-framework";
import { Entypo, MaterialCommunityIcons, Ionicons, Fontisto,FontAwesome5 } from '@expo/vector-icons';

import theme from "../../theme";
import Header from "../common/header";

const { height, width } = Dimensions.get("window");

class PatientProfile extends React.Component {
  state = {
    phoneNumber: "",
    patientheight: "",
    weight: "",
    blood: "",
    userId : "",
  };

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  async componentDidMount() {
    var pointer = this;
    try {
      const value = await AsyncStorage.getItem("access_token");
      console.log("hi from update");
      console.log(value);
      pointer.setState({ userId: value }); 
      console.log(pointer.state.userId);
    }
    catch (error) {
      console.log("err");
    }
  }

  handleSubmit = () => {
    const patient = {
      // profileImage: this.state.profileImage,
      phoneNumber: this.state.phoneNumber,
      patientheight: this.state.patientheight,
      weight: this.state.weight,
      blood: this.state.blood,
      id : this.state.userId,
    };
    console.log(patient);
    var url = "https://skincancerbackend.herokuapp.com/api/profile/patient/updatepatient";
    axios.post(url, patient).then((response) => {
      // response.send("account updated");
      console.log("then");
    });
    // .catch((error) => res.send("please try again") , console.log(error));
    //alert to check
    // Alert.alert("patient updated");
  };

  render() {
    const { navigation } = this.props;
    const { phoneNumber, patientheight, weight, blood } = this.state;

    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
         <ImageBackground 
          source={require('../../../assets/register-bg.png')}
           style={{width: width, height: 1000}} 
          >  
        <KeyboardAvoidingView
          style={styles.container}
          behavior="height"
          enabled
        >
          <Block
            flex
            center
            style={{
              marginTop: theme.SIZES.BASE * 1.875,
              marginBottom: height * 0.1,
            }}
          >
            {/* here logo */}
            <Text muted center size={theme.SIZES.FONT * 1.5} color={theme.COLORS.PRIMARY}>
            {" "}
            Update Your Profile{" "}
          </Text>
            <Block
              row
              center
              space="between"
              style={{ marginVertical: theme.SIZES.BASE * 1.875 }}
            ></Block>
          </Block>

          <Block flex={7} center space="between">
            <Block flex={1} middle>
              <Input
               borderless
                placeholder="Phone"
                autoCapitalize="none"
                style={{ width: width * 0.8 }}
                onBlur={() => {
                  var regPh = /^(1|2|3|4|5|6|7|8|9|0)/;
                  if (this.state.phoneNumber.length === 0) {
                    alert("should enter phone number");
                  } else if (!regPh.test(this.state.phoneNumber)) {
                    alert("not valid phone number");
                  } else if (this.state.phoneNumber.length > 10) {
                    alert("max number allowed 10");
                  }
                }}
                onChangeText={(text) => this.handleChange("phoneNumber", text)}
                iconContent={<Entypo name="phone" size={24} color={theme.COLORS.PRIMARY} style={{marginRight: 12}} />}
              />
              <Input
                borderless
                placeholder="Height"
                autoCapitalize="none"
                style={{ width: width * 0.8 }}
                onBlur={() => {
                  if (this.state.patientheight.length === 0) {
                    alert("should enter your height");
                  }
                }}
                onChangeText={(text) =>
                  this.handleChange("patientheight", text)
                }
                iconContent={<MaterialCommunityIcons name="human-male-height" size={24} color={theme.COLORS.PRIMARY} style={{marginRight: 12}} />}
              />
              <Input
                borderless
                placeholder="Weight"
                autoCapitalize="none"
                style={{ width: width * 0.8 }}
                onBlur={() => {
                  if (this.state.weight.length === 0) {
                    alert("should enter your weight");
                  }
                }}
                onChangeText={(text) => this.handleChange("weight", text)}
                iconContent={<FontAwesome5 name="weight" size={24} color={theme.COLORS.PRIMARY} style={{marginRight: 12}} />}
              />
              <Input
                borderless
                placeholder="Blood"
                autoCapitalize="none"
                style={{ width: width * 0.8 }}
                onBlur={() => {
                  var regB = /^(A|B|AB|O)[-+]$/;
                  if (this.state.bloodType.length === 0) {
                    alert("should enter blood type");
                  } else if (!regB.test(this.state.bloodType)) {
                    console.log(typeof this.state.bloodType);
                    alert("not valid blood type, example : A+ / O-");
                  }
                }}
                onChangeText={(text) => this.handleChange("blood", text)}
                iconContent={<Fontisto name="blood-drop" size={24} color={theme.COLORS.PRIMARY} style={{marginRight: 12}} />}
              />
            </Block>
            <Block flex middle>
              <Button
                
                color={theme.COLORS.PRIMARY}
                //                 onPress={() =>
                //                   Alert.alert(
                //                     "Sign up action",
                //                     `
                // Phone Number: ${phone}
                // Height: ${patientheight}
                // Weight: ${weight}
                // Blood Type: ${blood}`
                //                   )
                //                 }
                onPress={this.handleSubmit.bind(this)}
              >
                Save
              </Button>
            </Block>
          </Block>
        </KeyboardAvoidingView>
        </ImageBackground>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:70,
    margin:20,
    width: width * 0.9,
    height: height * 0.75,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: "center",
  },
});

export default PatientProfile;
