import React from "react";
import { ScrollView, StyleSheet, Dimensions, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// Galio components
import { Card, Block, NavBar, Icon } from "galio-framework";
import theme from "../../theme";
import Header from "../common/header";
import AsyncStorage from "@react-native-community/async-storage";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import * as MailComposer from "expo-mail-composer"
const { width } = Dimensions.get("screen");
export default class DoctorPendingApp extends React.Component {
  state = {
    userId: "",
    appointment: [],
    patientName: [],
    patientLastName: [],
    patientEmail:[],
  };
  async componentDidMount() {
    var pointer = this;
    try {
      // AsyncStorage.setItem(
      //   "access_token",
      //   JSON.stringify("5f15cd72286d1c6d109639e7")
      //);
      const value = await AsyncStorage.getItem("access_token");
      console.log("hi from appointment");
      console.log(value);
      pointer.setState({ userId: value });
      console.log(".......");
      console.log(pointer.state.userId);
      await axios
        //192.168.1.80
        .post("https://skincancerbackend.herokuapp.com/getPending", {
          params: {
            value: { id: pointer.state.userId },
          },
        })
        .then((res) => {
          console.log("hi axios 1");
          console.log(res.data);
          pointer.setState({ appointment: res.data });
          console.log(pointer.state.appointment[0].time);
        })
        .then(async () => {
          pointer.state.appointment.map( (element, i) => {
            console.log("hi",element)
            console.log("i",i)
             axios
              .post("https://skincancerbackend.herokuapp.com/getPatients", {
                params: {
                  value: { pId: element.patientId },
                },
              })
              .then(async (res) => {
                console.log("hi axios 2");

                pointer.state.patientName.push(res.data.firstName);
                pointer.state.patientLastName.push( res.data.lastName);
                pointer.state.patientEmail.push( res.data.email  );
               
                let patientName = pointer.state.patientName
                let patientLastName = pointer.state.patientLastName;
                let patientEmail = pointer.state.patientEmail;
                
                pointer.setState({ 
                  patientName: patientName,
                  patientLastName: patientLastName,
                  patientEmail: patientEmail  
                });
               
              });
              console.log(pointer.state.patientLastName)
          });
        });
    } catch (error) {
      console.log(error);
    }
  }

  approved = (apId,pEmail) => {
   
    var url = `https://skincancerbackend.herokuapp.com/approve`;
    // Opens prefilled email
    MailComposer.composeAsync({
    recipients: [pEmail], // array of email addresses
    subject: "Skin Cancer Appointment",
    body: "Your appointment is approved."
    })
    axios
      .post(url, { id: apId })
      .then(function (response) {
        alert("Appointment Approved");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  rejected = (apId, pEmail) => {
    MailComposer.composeAsync({
      recipients: [pEmail], // array of email addresses
      subject: "Skin Cancer Appointment",
      body: "Your appointment is rejected, choose another time."
    })

    var url = `https://skincancerbackend.herokuapp.com/rejected`;
    axios
      .post(url, { id: apId })
      .then(function (response) {
        alert("Appointment Discarded");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
      <Header drawer={this.props} title={"Pending Appointment"}/>
        <ScrollView contentContainerStyle={styles.cards}>
          <Block flex space="between">
            {this.state.appointment.map((card, id) => (
              <Card
                key={id}
                flex
                borderless
                shadowColor={theme.COLORS.BLACK}
                titleColor={card.full ? theme.COLORS.WHITE : null}
                style={styles.card}
                title={
                 ( this.state.patientName[id] + " " + this.state.patientLastName[id]).toUpperCase()
                }
                titleColor={theme.COLORS.WHITE}
                caption={
                  "Date : " +
                  card.date.slice(0, 10) +
                  "\n" +
                  "Time : " +
                  card.time +
                  " pm"
                }
                captionColor={theme.COLORS.WHITE}
                avatar="https://icons.iconarchive.com/icons/icons-land/medical/256/People-Patient-Male-icon.png"
                imageStyle={[card.padded ? styles.rounded : null]}
                imageBlockStyle={[
                  card.padded ? { padding: theme.SIZES.BASE / 2 } : null,
                  card.full ? null : styles.noRadius,
                ]}
              >
                {card.full ? (
                  <LinearGradient
                    colors={["transparent", "rgba(0,0,0, 0.8)"]}
                    style={styles.gradient}
                  />
                ) : null}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <AntDesign

                    name="checkcircle"
                    size={25}
                    color="black"
                    style={styles.iconStyleCheck}
                    onPress={this.approved.bind(this, card._id, this.state.patientEmail[id])}
                  />
                  <AntDesign
                    name="closecircle"
                    size={25}
                    color="black"
                    style={styles.iconStyleCircle}
                    onPress={this.rejected.bind(this, card._id, this.state.patientEmail[id])}
                  />
                </View>
              </Card>
            ))}
          </Block>
        </ScrollView>
      </Block>
    );
  }
}
const styles = StyleSheet.create({
  cards: {
    width,
    backgroundColor: theme.COLORS.WHITE,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  card: {
    backgroundColor: theme.COLORS.PRIMARY,
    width: width - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE * 0.875,
    elevation: theme.SIZES.BASE / 2,
  },
  full: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
  },
  noRadius: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  rounded: {
    borderRadius: theme.SIZES.BASE * 0.1875,
  },
  gradient: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    position: "absolute",
    overflow: "hidden",
    borderBottomRightRadius: theme.SIZES.BASE * 0.5,
    borderBottomLeftRadius: theme.SIZES.BASE * 0.5,
  },
  iconStyleCheck: {
    alignItems: "center",
    left: 280,
    bottom :10,
     color:"#fff"
  },
  iconStyleCircle: {
    color:"#fff",
    alignItems: "center",
    right: 20,
    bottom :10
  },
});
