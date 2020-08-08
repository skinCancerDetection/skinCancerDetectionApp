import React from "react";
import {
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  View,
  ImageBackground,
} from "react-native";
import { Block, Button, Input, NavBar, Text } from "galio-framework";

import theme from "../../theme";
import { Image } from "react-native";
import { Actions} from "react-native-router-flux";
import AsyncStorage from "@react-native-community/async-storage";
const { height, width } = Dimensions.get("window");
import {  MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import axios from "axios";
import { useState } from "react";
import { set } from "mongoose";
// import { createStackNavigator } from "@react-navigation/stack";

import Header from "../common/header";
function Login(props) {
  const state = {
    email: "",
    password: "",
  };
  const handleEmailChange = (e) => {
    state.email = e.nativeEvent.text;
  };

  const [password, setPassword] = React.useState("");

  function handlePasswordChange(e) {
    state.password = e.nativeEvent.text;
  }

  const onSubmit = (e) => {
    const user = {
      email: state.email,
      password: state.password,
    };
    
    if(state.email === "" || state.password===""){
      alert("Please enter your credentials!");
      
    }
    // console.log(props);
    
      
    var id;

    axios


      .post("https://skincancerbackend.herokuapp.com/login", user)


      .then((res) => {
      
        console.log(res.data)
        if (res.data === "Email not found") {
          alert("Email not found");
        }
        else if (res.data.result === true) {
          const token_pa = res.data.token
          id = res.data.patient._id;
          AsyncStorage.setItem("access_token", JSON.stringify(id));
          AsyncStorage.setItem("token_pa", JSON.stringify(token_pa));
          alert("Login Successed! ");
          Actions.push("Home");
        } else if (res.data === false) {
          alert("Login Failed! Wrong password");
        } 
      })
      .catch((err) => console.log(err));

      
  };

  return (
    <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
    <ImageBackground source={require('../../../assets/register-bg.png')} style={{width: width, height: 1500}}>
      <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
        <Block flex center style={{ marginTop: theme.SIZES.BASE }}>
          <Text> {"\n"}</Text>
          <Image source={require("../../../assets/splash.png")} />
          <Text muted center size={theme.SIZES.FONT * 2} color={theme.COLORS.PRIMARY}>
            {" "}
            Login{" "}
          </Text>
        </Block>
        <Block flex={2} center space="evenly">
          <Block flex={2} flex={2} middel width={width * 0.8} style={{ marginBottom: 15 }}>
            
            <Input
              borderless
              id="email"
              type="email-address"
              placeholder=" Email: exmple@gmail.com"
              autoCapitalize="none"
              style={{ width: width * 0.8 }}
              iconContent={<MaterialCommunityIcons name="email" size={24} color={theme.COLORS.PRIMARY} style={{marginRight: 12}} />}

              onBlur={() => {
                var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (state.email.length === 0) {
                  alert("should enter email");
                } else if (!reg.test(state.email)) {
                  alert("not valid email");
                }
              }}
              // value= {email}
              onChange={handleEmailChange}
            />
            <Input
              borderless
              password
              viewPass
              id="password"
              placeholder="Password"
              style={{ width: width * 0.8 }}
              iconContent={<Ionicons name="ios-lock" size={24} color={theme.COLORS.PRIMARY} style={{marginRight: 12}} />}
           
              onChange={handlePasswordChange}
            />
            <Block flex={1}  middle>
         <Button
              
              color={theme.COLORS.PRIMARY}
              onPress={onSubmit}
              style={styles.createButton}
            >
              <Text bold size={14} color={theme.COLORS.WHITE}>Sign In</Text>
            </Button>
            </Block>
            <Block flex row width={width * 0.75}>
            <Text center color={'#8898AA'} size={theme.SIZES.FONT * 0.75}>
                  {"Don't have an account? "}</Text>
              <Button 
              color="transparent" 
              shadowless 
              onPress={() => Actions.push('Signup')}
              textStyle={{
                color: theme.COLORS.PRIMARY,
                fontSize: 12,
                marginRight:125,
                marginBottom:40
                 }}
              >
                 Sign Up
              </Button>
            </Block>
          </Block>
        </Block>
      </KeyboardAvoidingView>
      </ImageBackground>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:100,
    margin:20,
    width: width * 0.9,
    height: height * 0.83,
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
  createButton: {
    width: width * 0.5,
    marginTop: 25
  }
});

export default Login;
