import React, { Component } from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux'; 

import MyDatePicker from './bookAppointment';
import Cards from './viewDoctorsCards'


export default class ViewDoctor extends Component {
  render() {
    return (
      <Router >
        <Stack  hideNavBar={true}>
          <Scene key="Cards" component={Cards} nav={this.props}/>
          <Scene key="MyDatePicker" component={MyDatePicker} />
        </Stack>
      </Router>
    );
  }
}