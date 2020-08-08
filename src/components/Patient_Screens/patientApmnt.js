import React from "react";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
// Galio components
import { Card, Block, NavBar, Icon } from "galio-framework";
import theme from "../../theme";
import Header from "../common/header";
import axios from "axios";
const { width } = Dimensions.get("screen");
class Appointments extends React.Component {
  state = {
    userId: "",
    appoints: [],
    doctorName: [],
  };
  async componentDidMount() {
    var pointer = this;
    try {
      //const value = "5f16ac53082a493570770a1d";
      const value = await AsyncStorage.getItem("access_token");
      console.log("hi from appoints");
      await pointer.setState({ userId: JSON.parse(value) });
      console.log(pointer.state);

      await axios
        .post("https://skincancerbackend.herokuapp.com/patient/appoints", {
          params: {
            value: { id: pointer.state.userId },
          },
        })
        .then(async (res) => {
          console.log("hi");
          console.log(res.data);
          await pointer.setState({ appoints: res.data });
        })
        .then(async () => {
          await pointer.state.appoints.map(async (element) => {
            await axios
              .post("https://skincancerbackend.herokuapp.com/api/user/doctor", {
                id: element.doctorId[0],
              })
              .then(async (res) => {
                let array = [];
                this.state.doctorName.push((res.data.firstName + " " + res.data.lastName).toUpperCase());
                await pointer.setState({ doctorName: this.state.doctorName });
              });
          });
        });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { navigation } = this.props;
    const doctors = this.state.doctorName;
    console.log(doctors[0]);
    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        {/* <NavBar
          title="Appointments"
          left={
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon
                name="menu"
                family="feather"
                size={theme.SIZES.BASE}
                color={theme.COLORS.ICON}
              />
            </TouchableOpacity>
          }
          style={
            Platform.OS === "android" ? { marginTop: theme.SIZES.BASE } : null
          }
        /> */}
        <Header drawer={this.props} title={"Appointments"} />
        <ScrollView contentContainerStyle={styles.cards}>
          <Block flex  space="between">
            {this.state.appoints.map((appoint, i) => (
              <Card
                key={i}
                flex
                borderless
                shadowColor={theme.COLORS.BLACK}
                style={styles.card}
                title={doctors[i]}
                titleColor={theme.COLORS.WHITE}
                captionColor={theme.COLORS.WHITE}
                caption={
                  "Status: " +
                  appoint.status +
                  "\n" +
                  "Date:" +
                  appoint.date +
                  "\n" +
                  "Time: " +
                  appoint.time
                }
                avatar='https://freeiconshop.com/wp-content/uploads/edd/calendar-flat.png'
                imageStyle={[appoint.padded ? styles.rounded : null]}
                imageBlockStyle={[
                  appoint.padded ? { padding: theme.SIZES.BASE / 1.5 } : null,
                  appoint.full ? null : styles.noRadius,
                ]}
              ></Card>
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
    backgroundColor: "#5E72E4",
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
});
export default Appointments;
