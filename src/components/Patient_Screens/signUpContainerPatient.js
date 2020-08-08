import React, { Component } from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux'; 


import Drwer from '../screens/patientSideMenu';
import Signup from "./signupPa";
import LoginContainerPatient from './loginContainerPatient';
export default class SignUpContainerPatient extends Component {
  render() {
    return (
      <Router >
        <Stack  hideNavBar={true}>
          <Scene key="Signup" component={Signup} />
          <Scene key="LoginPatient" component={LoginContainerPatient} nav={this.props} />
        </Stack>
      </Router>
    );
  }
}