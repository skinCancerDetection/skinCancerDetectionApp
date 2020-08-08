import React from "react";
import { Dimensions, StyleSheet, View, Image } from "react-native";
import { Text } from "galio-framework";
import theme from "../../theme";
import Header from "../common/header";
import { ScrollView } from "react-native-gesture-handler";
const { height, width } = Dimensions.get("window");
const Help = (props) => {
  return (
    <ScrollView>
      <Header drawer={props} title={"Help"} />
      
      <Text muted center size={theme.SIZES.FONT * 2} color={theme.COLORS.PRIMARY}>
        {"\n"} Step 1
      </Text>
      <Text muted center size={theme.SIZES.FONT + 2} color={"black"}>
         Scan Skin {"\n"}
      </Text>
      <Text muted center size={theme.SIZES.FONT} color={theme.COLORS.PLACEHOLDER}>
        {"\n"} Scan a part of your skin, focus a camera on your skin for a
        higher resolution to get an accurate prediction. {"\n"}
      </Text>
      <Image  center style={styles.social} source={require("../../../assets/capture.jpg")}/>
      <Text muted center size={theme.SIZES.FONT * 2} color={theme.COLORS.PRIMARY}>
      {"\n"}Step 2
      </Text>
      <Text muted center size={theme.SIZES.FONT + 2} color={"black"}>
       View Doctors List {"\n"}
      </Text>
      <Text muted center size={theme.SIZES.FONT} color={theme.COLORS.PLACEHOLDER}>
        {"\n"} After prediction result if result was high risk view doctor list
        to show doctors name and information to book appointment. {"\n"}
      </Text>
      <Image  center style={styles.social} source={require("../../../assets/viewdr.jpg")}/>
      <Text muted center size={theme.SIZES.FONT * 2} color={theme.COLORS.PRIMARY}>
         {"\n"}Step 3
      </Text>
      <Text muted center size={theme.SIZES.FONT + 2} color={"black"}>
        Book Appointment {"\n"}
      </Text>
      <Text muted center size={theme.SIZES.FONT} color={theme.COLORS.PLACEHOLDER}>
        {"\n"} Book appointment by clicking in book button, your appointment
        will confirmed or rejected by the doctor after a while. {"\n"}
      </Text>
    
      <Image  center style={styles.social} source={require("../../../assets/book.jpg")}/>
    </ScrollView>
  );
}
export default Help;
const styles = StyleSheet.create({
  
  social: {
    width: 260,
    height: 600 ,
    marginLeft:75
    
  },

});
