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

import HomePatient from "../Patient_Screens/homePatient";
import ProfileContainer from "../Patient_Screens/profileContainer";
import ViewDoctor from "../Patient_Screens/viewDoctor";
import Logout from "../Patient_Screens/logOut";
import AboutUs from "../Patient_Screens/aboutUs";
import Help from "../Patient_Screens/help";
import Report from "../Patient_Screens/patientReport";
import Appointments from "../Patient_Screens/patientApmnt";
import theme from '../../theme'
const DrwerNavigator = createDrawerNavigator();
const Stack = createStackNavigator();
function Drwer(props) {
  return (
    <NavigationContainer>
    
      <DrwerNavigator.Navigator>
     
        <DrwerNavigator.Screen
          name="Home"
          component={HomePatient}
          options={{
            drawerIcon: ({ tintColor }) => (
              <Feather name="home" size={16} color={theme.COLORS.PRIMARY} />
            ),
          }}
        />
        <DrwerNavigator.Screen
          name="Profile"
          component={ProfileContainer}
          options={{
            drawerIcon: ({ tintColor }) => (
              <Feather name="user" size={16} color={theme.COLORS.PRIMARY} />
            ),
          }}
        />
        <DrwerNavigator.Screen
          name="Doctors"
          component={ViewDoctor}
          options={{
            drawerIcon: ({ tintColor }) => (
              <Fontisto name="doctor" size={16} color={theme.COLORS.PRIMARY} />
            ),
          }}
        />
        <DrwerNavigator.Screen
          name="Appointments"
          component={Appointments}
          options={{
            drawerIcon: ({ tintColor }) => (
              <MaterialIcons name="date-range" size={16} color={theme.COLORS.PRIMARY} />
            ),
          }}
        />
        <DrwerNavigator.Screen
          name="My Report"
          component={Report}
          options={{
            drawerIcon: ({ tintColor }) => (
              <MaterialIcons name="report" size={16} color={theme.COLORS.PRIMARY} />
            ),
          }}
        />
        <DrwerNavigator.Screen
          name="Help"
          component={Help}
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
          component={Logout}
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

export default Drwer;
