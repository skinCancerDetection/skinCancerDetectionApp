import React from "react";
import { Dimensions, StyleSheet, View, Image } from "react-native";
import { Text } from "galio-framework";
import theme from "../../theme";
import Header from "../common/header";
import { ScrollView } from "react-native-gesture-handler";
const { height, width } = Dimensions.get("window");
const HelpDr = (props) => {
  return (
    <ScrollView>
      <Header drawer={props} title={"Help"} />
      
     
      <Text muted center size={theme.SIZES.FONT + 2} color={theme.COLORS.PRIMARY}>
        {'\n'} Check your Schedule {"\n"}
      </Text>
      <Text muted center size={theme.SIZES.FONT} color={theme.COLORS.PLACEHOLDER}>
        {"\n"} All approved appointments will appear in the home page 
        with the patient name, date and Time {"\n"}
      </Text>
      <Image  center style={styles.social} source={require("../../../assets/schedule.jpg")}/>
    
      <Text muted center size={theme.SIZES.FONT + 2} color={theme.COLORS.PRIMARY}>
       Pending Appointments {"\n"}
      </Text>
      <Text muted center size={theme.SIZES.FONT} color={theme.COLORS.PLACEHOLDER}>
        {"\n"} You can approve or decline appointment . {"\n"}
      </Text>
      <Image  center style={styles.social} source={require("../../../assets/pending.jpg")}/>
    
      <Text muted center size={theme.SIZES.FONT + 2} color={theme.COLORS.PRIMARY}>
        Update profile {"\n"}
      </Text>
      <Text muted center size={theme.SIZES.FONT} color={theme.COLORS.PLACEHOLDER}>
        {"\n"} You can update your profile, phone number, Location, Working hour and Working To.. {"\n"}
      </Text>
    
      <Image  center style={styles.social} source={require("../../../assets/updateProfile.jpg")}/>
    </ScrollView>
  );
}
export default HelpDr;
const styles = StyleSheet.create({
  
  social: {
    width: 260,
    height: 600 ,
    marginLeft:75
    
  },

});
