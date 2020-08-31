import React, { useEffect } from "react";
import { View, Image, ImageBackground, StyleSheet, Text } from "react-native";

import Images from "../assets/images/images";
import { widthPercentageToDP } from "react-native-responsive-screen";

const Connection = (props) => {
  //navigating to Layout Screen after 3 seconds
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("Layout");
    }, 2000);
  }, []);

  return (
    <ImageBackground
      style={styles.backgroundImage}
      imageStyle={styles.imageStyle}
      source={Images.BackgroundTwo}
    >
      <View style={styles.container}>
        <Image source={Images.Connecting} style={styles.ConnectingImageStyle} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ConnectingImageStyle: {
    resizeMode: "contain",
    width: widthPercentageToDP("40%"),
  },
});

export default Connection;
