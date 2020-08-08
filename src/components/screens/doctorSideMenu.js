import "react-native-gesture-handler";
import React from "react";
//import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import {
  NavigationContainer,
  createAppContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-community/async-storage";
import theme from '../../theme'

import AboutUs from "../Patient_Screens/aboutUs";

import DoctorAppointments from "../Dr_screens/doctorSchedule";
import DoctorPendingApp from "../Dr_screens/pendding";
import ProfileRout from "../Dr_screens/profileRout";
import LogoutDr from "../Dr_screens/logoutDr";
import HelpDr from "../Dr_screens/helpDr";
const DrwerNavigator = createDrawerNavigator();
const Stack = createStackNavigator();
function DrwerDoctor(props) {
  return (
    <NavigationContainer>
      <DrwerNavigator.Navigator>
      <DrwerNavigator.Screen
          name="Appointments"
          component={DoctorAppointments}
          options={{
            drawerIcon: ({ tintColor }) => (
              <MaterialIcons name="date-range" size={16} color={theme.COLORS.PRIMARY} />
            ),
          }}
        />
        <DrwerNavigator.Screen
          name="Pendindg Appointments"
          component={DoctorPendingApp}
          options={{
            drawerIcon: ({ tintColor }) => (
              <Feather name="home" size={16} color={theme.COLORS.PRIMARY} />
            ),
          }}
        />
        <DrwerNavigator.Screen
          name="Profile"
          component={ProfileRout}
          options={{
            drawerIcon: ({ tintColor }) => (
              <Feather name="user" size={16} color={theme.COLORS.PRIMARY} />
            ),
          }}
        />
     
    
    
        <DrwerNavigator.Screen
          name="Help"
          component={HelpDr}
          options={{
            drawerIcon: ({ tintColor }) => (
              <MaterialIcons name="help" size={16} color={theme.COLORS.PRIMARY} />
            ),
          }}
        />
        <DrwerNavigator.Screen
          name="AboutUs"
          component={AboutUs}
          options={{
            drawerIcon: ({ tintColor }) => (
              <MaterialIcons name="info" size={16} color={theme.COLORS.PRIMARY} />
            ),
          }}
        />
        <DrwerNavigator.Screen
          name="Logout"
          component={LogoutDr}
          
          options={{
            drawerIcon: ({ tintColor }) => (
              <MaterialIcons name="exit-to-app" size={16} color={theme.COLORS.PRIMARY} />
            ),
          }}
        />
      </DrwerNavigator.Navigator>
    </NavigationContainer>
  );
}

export default DrwerDoctor;
