import React from "react";
import DatePicker from "react-native-datepicker";
import AsyncStorage from '@react-native-community/async-storage';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PanResponder,
  TextInput,
} from "react-native";
import { Button } from "galio-framework";
import Header from "../common/header";
import DateTimePicker from "@react-native-community/datetimepicker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import TimePicker from "react-native-simple-time-picker";

class MyDatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      time: "20:00",
      isDatePickerVisible: false,
      selectedHours: 0,
      selectedMinutes: 0,
      text: " ",
      Dr_id:""
    };
    this.showDatePicker = this.showDatePicker.bind(this);
    this.hideDatePicker = this.hideDatePicker.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  async componentDidMount() {
        
   var that = this;
      try {
        const jsonValue = await AsyncStorage.getItem('Dr_id')
        console.log(jsonValue)
        that.setState({Dr_id :jsonValue }) 
      } catch(e) {
        // error reading value
      }
  
}


  showDatePicker = () => {
    this.setState({
      isDatePickerVisible: true,
    });
  };

  hideDatePicker = () => {
    this.setState({
      isDatePickerVisible: false,
    });
  };

  handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    this.setState({
      time: date,
    });
    this.hideDatePicker();
  };

  render() {
    console.log(this.state.Dr_id)

    return (
      <View>
        <Header drawer={this.props} />
        <View>
          <Text style={styles.descreption}>
            Choose a date and time to book your appointment.. {"\n"}
            {"\n"}
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.label}>Date</Text>
          <DatePicker
            style={{ width: 250, alignItems: "center" }}
            date={this.state.date}
            mode="date"
            placeholder="Date"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            iconSource={require("../../../assets/google_calendar.png")}
            onDateChange={(date) => {
              this.setState({ date: date });
            }}
          />

          <Text style={styles.label}>Time</Text>

          <View>
            {/* <Button title="Show Date Picker" onPress={this.showDatePicker} />
          <Text style={styles.label}>{this.state.time}</Text>
          <DateTimePickerModal
            isVisible={this.state.isDatePickerVisible}
            mode="time"
            onConfirm={this.handleConfirm}
            onCancel={this.hideDatePicker}
          /> */}

            <Text style={styles.timeLabel}>
              {this.state.selectedHours}H:{this.state.selectedMinutes}M
            </Text>

            <TimePicker
              style={styles.time}
              selectedHours={this.state.selectedHours}
              selectedMinutes={this.state.selectedMinutes}
              onChange={(hours, minutes) =>
                this.setState({
                  selectedHours: hours,
                  selectedMinutes: minutes,
                })
              }
            />
          </View>
          <Text style={styles.label}>Note</Text>
          <TextInput
            placeholder="write a note for doctor"
            style={styles.note}
            width={260}
            multiline={true}
            numberOfLines={4}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          />
          <Text>{"\n"}</Text>
          <Button style={styles.buttonStyle}> Book </Button>
        </View>
      </View>
    );
  }
}

export default  MyDatePicker;
const styles = StyleSheet.create({
  container: {
    flex: -5,

    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  descreption: {
    textAlign: "center",
    margin: 0,
    fontWeight: "bold",
    justifyContent: "space-between",
    padding: 30,
    fontSize: 25,
  },
  label: {
    fontSize: 25,
    textAlign: "center",
    color: "#18DCFF",
  },
  timeLabel: {
    fontSize: 25,
    textAlign: "center",
    color: "#000",
  },
  note: {
    borderColor: "#18DCFF",
    borderWidth: 3,
    textAlign: "center",
  },
  time: {
    borderColor: "#18DCFF",
    borderWidth: 3,
  },
  buttonStyle: {
    backgroundColor: "#18DCFF",
    borderWidth: 2,
    borderColor: "#18DCFF",
    borderRadius: 25,
  },
});
