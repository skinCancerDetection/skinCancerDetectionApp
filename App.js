import "react-native-gesture-handler";
import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
//import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import Logout from "./src/components/screens/logOut";

import {
  HomeScreen,
  ProfileScreen,
  AppointmentsScreen,
  ReportScreen,
  AboutUsScreen,
  HelpScreen,
  SettingsScreen,
  LogoutScreen,
} from "./src/components/screens";
import HomePatient from "./src/components/screens/homePatient";
import Sidebar from "./src/components/common/sideBar";
import Header from "./src/components/common/header";
import MyDatePicker from "./src/components/screens/bookAppointment";
import Signup from "./src/components/screens/signupPa";
import Cards from "./src/components/screens/viewDoctorsCards";
import PatientUpdate from "./src/components/screens/patientUpdate";
import Login from "./src/components/screens/login";
import ViewDoctor from "./src/components/screens/viewDoctor";
import LoginContainerPatient from "./src/components/screens/loginContainerPatient";
// DrawerNavigatorExample

const DrawerNavigatorExample = createDrawerNavigator(
  {
    LoginScreen: {
      screen: LoginContainerPatient,
      navigationOptions: ({ navigation }) => ({
        title: "Login",
        drawerIcon: ({ tintColor }) => (
          <Feather name="home" size={16} color={tintColor} />
        ),
      }),
    },
    HomeScreen: {
      screen: HomePatient,
      navigationOptions: ({ navigation }) => ({
        title: "Home",
        drawerIcon: ({ tintColor }) => (
          <Feather name="home" size={16} color={tintColor} />
        ),
      }),
    },
    ProfileScreen: {
      screen: PatientUpdate,
      navigationOptions: {
        title: "Profile",
        drawerIcon: ({ tintColor }) => (
          <Feather name="user" size={16} color={tintColor} />
        ),
      },
    },
    DoctorsScreen: {
      screen: ViewDoctor,
      navigationOptions: ({ navigation }) => ({
        title: "Doctors",
        drawerIcon: ({ tintColor }) => (
          <Fontisto name="doctor" size={16} color={tintColor} />
        ),
      }),
    },
    // AppointmentsScreen :{
    //   screen:AppointmentsScreen,
    //   navigationOptions : {
    //     title :'Appointments',
    //     drawerIcon :({tintColor}) =><MaterialIcons name="date-range" size={16} color={tintColor} />
    //   }
    // },
    // ReportScreen :{
    //   screen:ReportScreen,
    //   navigationOptions : {
    //     title :'My Report',
    //     drawerIcon :({tintColor}) =><MaterialIcons name="report" size={16} color={tintColor} />
    //   }
    // },
    AboutUsScreen: {
      screen: AboutUsScreen,
      navigationOptions: {
        title: "About Us",
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name="info" size={16} color={tintColor} />
        ),
      },
    },
    HelpScreen: {
      screen: HelpScreen,
      navigationOptions: {
        title: "Help",
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name="help" size={16} color={tintColor} />
        ),
      },
    },
    SettingsScreen: {
      screen: Signup,
      navigationOptions: {
        title: "SignUp",
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name="settings" size={16} color={tintColor} />
        ),
      },
    },
    LogoutScreen: {
      screen: Logout,
      navigationOptions: {
        title: "Logout",
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name="exit-to-app" size={16} color={tintColor} />
        ),
      },
    },
  },
  {
    contentComponent: (props) => <Sidebar {...props} />,
  }
);
// export default createAppContainer(DrawerNavigator);
export default createAppContainer(DrawerNavigatorExample);
