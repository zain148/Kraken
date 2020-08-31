import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, ImageBackground, Text } from "react-native";
import Images from "../assets/images/images";
import * as Font from "expo-font";
import { Feather, Ionicons } from "@expo/vector-icons";

class TryManually extends React.Component {
  constructor(props) {
    super(props);

    const { params } = this.props.navigation.state;
    const connection = params.connection ? params.connection : "";
    this.state = {
      Loading: false,
      connection: connection,
    };
  }

  //Load Fonts
  async componentDidMount() {
    await Font.loadAsync({
      MyriadProBold: require("../assets/fonts/MyriadPro-Semibold.otf"),
    });
    this.setState({ Loading: true });
  }

  render() {
    return this.state.Loading === true ? (
      <ImageBackground
        style={styles.backgroundImage}
        imageStyle={styles.imageStyle}
        source={Images.BackgroundOne}
      >
        <View style={styles.container}>
          <View style={styles.infoWrapperTwo}>
            {this.state.connection === "failed" ? (
              <Text style={styles.infoTextOne}> Auto Connection Failed</Text>
            ) : (
              <Text style={styles.infoTextOne}> WIFI CONNECTION</Text>
            )}
            <Text style={[styles.infoTextTwo, { fontFamily: "MyriadProBold" }]}>
              PLEASE CONNECT MANUALLY TO WIFI TO OUR PREDEFINED NETWORK:
            </Text>
          </View>
          <View style={styles.wifiWrapper}>
            <View style={styles.wifiImageWrapper}>
              <Feather name="wifi" size={55} color="#FFD6D5" />
            </View>
            <Text style={styles.wifiText}>NETWORK123</Text>
          </View>
          <View style={styles.infoWrapperThree}>
            <Text style={[styles.infoTextThree, { fontFamily: "MyriadProBold" }]}>
              OR CHECK IF DEVICES ARE TURNED ON AND SET ON WIFI MODE.
            </Text>
          </View>
        </View>
      </ImageBackground>
    ) : null;
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  backButton: {
    top: 20,
    left: 30,
  },
  container: {
    flex: 1,
    marginTop: 80,
    justifyContent: "center",
  },
  infoWrapperOne: {
    flex: 0.8,
    justifyContent: "center",
  },
  infoWrapperOneEmpty: {
    flex: 0.6,
  },
  infoTextOne: {
    color: "#FFD6D5",
    fontSize: 24,
    textAlign: "center",
  },
  infoWrapperTwo: {
    flex: 0.6,
  },
  infoTextTwo: {
    fontSize: 18,
    color: "#B09198",
    marginTop: 30,
    textAlign: "center",
    paddingLeft: "1%",
    paddingRight: "1%",
    lineHeight: 24,
  },
  wifiWrapper: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
  },
  wifiImageWrapper: {
    height: 70,
    width: 100,
    alignItems: "center",
  },
  wifiText: {
    marginTop: 5,
    color: "#FFD6D5",
    fontSize: 18,
  },
  infoWrapperThree: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  infoTextThree: {
    fontSize: 18,
    color: "#B09198",
    textAlign: "center",
    paddingLeft: "1%",
    paddingRight: "1%",
    marginTop: 0,
    lineHeight: 20,
  },
});

export default TryManually;
