import React from "react";
import axios from "axios";
import {
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  ImageBackground,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
// galio component
import { Block, Button, Input, Text } from "galio-framework";
import theme from "../../theme";
import Header from "../common/header";
import {AntDesign ,Entypo, MaterialCommunityIcons,EvilIcons, Ionicons, Fontisto,FontAwesome5 } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';


const { height, width } = Dimensions.get("window");

class Profile extends React.Component {
  state = {
    firstName:"",
    lastName:"",
    profileImage:"https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg",
    phoneNumber: "",
    height: "",
    userId: "",
    blood:"",
    weight:"",
    email:""
  };
  
  async componentDidMount() {
    const that = this;
    const id = await AsyncStorage.getItem("access_token");
    const url = "https://skincancerbackend.herokuapp.com/api/profile/user/paitent"
    this.setState({userId: JSON.parse(id)})
    await axios
    .post(url, {id: JSON.parse(id)}) 
    .then( async (res) => {
       await that.setState({
        firstName:res.data.firstName,
        lastName:res.data.lastName,
        email:res.data.email,
        phoneNumber: res.data.phoneNumber ,
        height:res.data.height,
        blood:res.data.blood,
        weight:res.data.weight
       })
       console.log(res.data)
    })
  }

   
  


  render() {
    const { navigation } = this.props;
    const { phoneNumber, clinicLocation, workingFrom, workingTo } = this.state;
    const user= this.state
   
    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.BLACK }} >
      <ImageBackground 
    source={require('../../../assets/bg.png')}
    style={{width: width, height: height}} 
>  
        <Header drawer={this.props} title={'Profile'}  />
        <Block flex style={styles.profileCard} >
        <Block flex={0.9} middle style={styles.avatarContainer}>
        <Image
            source={{uri:user.profileImage}}        
            style={styles.avatar}

        />
         <Text size={theme.SIZES.FONT * 1.3} color={"#5E72E4"}>{ (user.firstName +" " + user.lastName).toUpperCase()}</Text>
        </Block>
        
        <Block flex={1.3} >
        <Text  size={theme.SIZES.FONT * 1.1} color={"#5E72E4"}><Entypo name="phone" size={24} color={'#000'} style={{marginRight: 12}} />{" Phone Number: "}</Text>
        <Text  size={theme.SIZES.FONT * 1} color={theme.COLORS.PLACEHOLDER}>{"      "+user.phoneNumber+"\n"}</Text>
        <Text size={theme.SIZES.FONT * 1.1} color={"#5E72E4"}><MaterialCommunityIcons name="email" size={24} color={'#000'} style={{marginRight: 12}} />{" Email: "}</Text>
        <Text  size={theme.SIZES.FONT * 1} color={theme.COLORS.PLACEHOLDER}>{"      " + user.email+"\n"}</Text>
        <Text size={theme.SIZES.FONT * 1.1} color={"#5E72E4"}> <MaterialCommunityIcons name="human-male-height" size={24} color={'#000'} style={{marginRight: 12}} />{" Height: "}</Text>
        <Text  size={theme.SIZES.FONT * 1} color={theme.COLORS.PLACEHOLDER}>{"      " + user.height+"\n"}</Text>
        <Text size={theme.SIZES.FONT * 1.1} color={"#5E72E4"}><FontAwesome5 name="weight" size={22} color={'#000'} style={{marginRight: 12}} />{"Weight: " }</Text>
        <Text size={theme.SIZES.FONT * 1.1} color={theme.COLORS.PLACEHOLDER}>{"      " + user.weight+'\n'}</Text>
        <Text size={theme.SIZES.FONT * 1.1} color={"#5E72E4"}><Fontisto name="blood-drop" size={22} color={'#000'} style={{marginRight: 12}} />{"Blood Type: " }</Text>
        <Text size={theme.SIZES.FONT * 1} color={theme.COLORS.PLACEHOLDER}>{"      " + user.blood+'\n'}</Text>
        <Block middle style={{marginBottom:20}}>
        <Button 
            
            color={"#5E72E4"}
            style={{ width: 150 }}
            onPress={()=> {Actions.push('PatientProfile')}}
            > UPDATE</Button>
           
        </Block>
       
        </Block>
        </Block>
        </ImageBackground>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:100,
    margin:20,
    width: width * 0.9,
    height: height * 0.9,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  inputIcons: {
    marginRight: 12
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: "center",
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 62,
    borderWidth: 0
  },
  avatarContainer: {
    position: "relative",
    marginTop: -130,
    paddingBottom:-10,
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop:70 ,
    marginBottom:30,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2
  }
});

export default Profile;
