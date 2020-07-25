import React from 'react';
import {AppRegistry} from "react-native"
import Screen from './screen';

export const HomeScreen =({navigation}) => <Screen navigation={navigation} name='Home'/>
export const ProfileScreen =({navigation}) => <Screen navigation={navigation} name='Profile'/>
export const AppointmentsScreen =({navigation}) => <Screen navigation={navigation} name='Appointments'/>
export const ReportScreen =({navigation}) => <Screen navigation={navigation} name='My Report'/>
export const AboutUsScreen =({navigation}) => <Screen navigation={navigation} name='About Us'/>
export const HelpScreen =({navigation}) => <Screen navigation={navigation} name='Help'/>
export const SettingsScreen =({navigation}) => <Screen navigation={navigation} name='Settings'/>
export const LogoutScreen =({navigation}) => <Screen navigation={navigation} name='Logout'/>
