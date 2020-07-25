
import React, { Component } from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux'; 

import MyDatePicker from './screens/bookAppointment';
import Cards from './screens/viewDoctors'


export default class Test extends Component {
  render() {
    return (
      <Router >
        <Stack  hideNavBar={true}>
          <Scene key="Cards" component={Cards} />
          <Scene key="MyDatePicker" component={MyDatePicker} />
        </Stack>
      </Router>
    );
  }
}