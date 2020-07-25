import React from "react";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
// import AsyncStorage from "react-native";
// Galio components
import { Card, Block, NavBar, Icon } from "galio-framework";
import theme from "../../theme";

const { width } = Dimensions.get("screen");

const cards = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?w=840&q=300",
    avatar: "http://i.pravatar.cc/100",
    title: "Christopher Moon",
    caption: "138 minutes ago",
    location: "Los Angeles, CA",
  }
];

export default class PatientApmnt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apntInfo: [],
      userId: "",
    }
  }
  componentDidMount() {

    AsyncStorage.getItem("access_token").then(function (data) {
      console.log("hi from apmn");
      console.log(data);
      // this.setState({userId : data})
      // this.state.userId = data
    });

    console.log("hi")
    // console.log(this.state.userId)


    axios
      .get("http://192.168.1.75:8080/patient/appointments")
      .then((response) => {
        this.setState({ apntInfo: response.data });
        //console.log(response.data);
        // console.log(this.state.userId);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { navigation } = this.props;
    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <NavBar
          title="Cards"
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
        />
        <ScrollView contentContainerStyle={styles.cards}>
          <Block flex space="between">
            {cards &&
              cards.map((card, id) => (
                <Card
                  key={`card-${card.image}`}
                  flex
                  borderless
                  shadowColor={theme.COLORS.BLACK}
                  titleColor={card.full ? theme.COLORS.WHITE : null}
                  style={styles.card}
                  title={card.title}
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
    backgroundColor: "#18DCFF",
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

// import React from "react";
// import { useEffect } from "react";
// import { ScrollView, StyleSheet, Dimensions } from "react-native";
// import axios from "axios";
// import { LinearGradient } from "expo-linear-gradient";
// // Galio components
// import { Card, Block, NavBar, Icon } from "galio-framework";
// import theme from "../../theme";
// import AsyncStorage from "@react-native-community/async-storage";
// const { width } = Dimensions.get("screen");

// const card = {
//   id: 1,
//   avatar: "http://i.pravatar.cc/100",
// };

// var report = {
//   "firstName": "yaso",
//   "lastName": "",
// }
// function Report() {


//   const state = {
//     userId: "",
//   };


//   useEffect(() => {
//     AsyncStorage.getItem("access_token")
//       .then(function (data) {
//         console.log("hi from apmn");
//         console.log(data);
//         state.userId = data;
//       })
//       .then(function () {
//         axios
//           .post("http://192.168.1.83:8080/patient/appointments", {
//             params: {
//               data: { id: state.userId },
//             },
//           })
//           .then((res) => {
//             console.log("hi")
//             console.log(res.data)
//             //card.report.push(res.data)
//             // console.log(card.report[0])
//             report["firstName"] = res.data.firstName
//             report["lastName"] = res.data.lastName
//             console.log(report.firstName)

//           })
//           .catch((err) => console.log("err"));
//       });
//   });

//   return (
//     <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
//       <ScrollView contentContainerStyle={styles.cards}>
//         <Block flex space="between">
//           {/* {cards && cards.map((card, id) => ( */}
//           <Card
//             flex
//             borderless
//             shadowColor={theme.COLORS.BLACK}
//             style={styles.card}
//             //title={card.report[0].firstName + " " + card.report[0].lastName}
//             title={JSON.stringify(report.firstName)}
//             caption={
//               // "\n" +    
//               // "Blood type  " +
//               // state.report[0].blood +
//               // "\n" +
//               // "Height  " +
//               // state.report[0].height +
//               // "\n" +
//               // "Weight  " +
//               // rstate.report[0].weight
//               "blood"
//             }
//             avatar={`${card.avatar}`}
//             footerStyle={card.full ? styles.full : null}
//           >
//             {card.full ? (
//               <LinearGradient
//                 colors={["transparent", "rgba(0,0,0, 0.8)"]}
//                 style={styles.gradient}
//               />
//             ) : null}
//           </Card>
//           {/* ))}   */}
//         </Block>
//       </ScrollView>
//     </Block>
//   );
// }
// const styles = StyleSheet.create({
//   cards: {
//     width,
//     backgroundColor: theme.COLORS.WHITE,
//     alignItems: "center",
//     justifyContent: "flex-start",
//   },
//   card: {
//     backgroundColor: "#18DCFF",
//     width: width - theme.SIZES.BASE * 2,
//     marginVertical: theme.SIZES.BASE * 0.875,
//     elevation: theme.SIZES.BASE / 2,
//   },
//   full: {
//     position: "absolute",
//     bottom: 0,
//     right: 0,
//     left: 0,
//   },
//   noRadius: {
//     borderBottomLeftRadius: 0,
//     borderBottomRightRadius: 0,
//   },
//   rounded: {
//     borderRadius: theme.SIZES.BASE * 0.1875,
//   },
//   gradient: {
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: 90,
//     position: "absolute",
//     overflow: "hidden",
//     borderBottomRightRadius: theme.SIZES.BASE * 0.5,
//     borderBottomLeftRadius: theme.SIZES.BASE * 0.5,
//   },
// });
// export default Report;
