import React, { useEffect } from "react";
import { View, Image, ImageBackground, StyleSheet, Text } from "react-native";
import AnimatedProgressWheel from "react-native-progress-wheel";
import Images from "../assets/images/images";
import { widthPercentageToDP } from "react-native-responsive-screen";
import colors from "../config/Colors.js";
import { Asset } from "expo-asset";

const Connection = (props) => {
  //Navigate to Layout Screen
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("Layout");
    }, 3000);
  });

  //Load Before Return
  const imageURI = Asset.fromModule(Images.BackgroundTwo).uri;

  if (imageURI) {
    return (
      <ImageBackground
        style={styles.backgroundImage}
        imageStyle={styles.imageStyle}
        source={{ uri: imageURI }}
      >
        <View style={styles.container}>
          <View style={{ justifyContent: "center", alignItems: "center", position: "absolute" }}>
            <Image source={Images.Connecting} style={styles.ConnectingImageStyle} />
          </View>
          <AnimatedProgressWheel
            progress={100}
            animateFromValue={0}
            duration={3000}
            size={270}
            width={13}
            color={colors.ButtonColor}
            backgroundColor={colors.lightBrown}
          />
        </View>
      </ImageBackground>
    );
  } else {
    return;
  }
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
