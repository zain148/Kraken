import React from "react";
import {
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  ImageBackground,
  StyleSheet,
} from "react-native";
import Images from "../assets/images/images";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Welcome = (props) => {
  const connect = () => {
    //alert("First let's say Failed connection ");
    // props.navigation.navigate("TryManually", { connection: "failed" });

    props.navigation.navigate("Connecting");
  };

  return (
    <ImageBackground
      style={styles.backgroundImage}
      imageStyle={styles.imageStyle}
      source={Images.BackgroundOne}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Image source={Images.WelcomeMessage} style={styles.welcomeMessageStyle} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => connect()}>
            <Image source={Images.Connect} style={styles.ConnectImageStyle} />
          </TouchableOpacity>
        </View>

        <View style={styles.bottomTextContainer}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("TryManually", { connection: "correct" })}
          >
            <Image source={Images.TryManually} style={styles.tryManuallyImageStyle} />
          </TouchableOpacity>
        </View>
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
    flex: 7,
  },
  textContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeMessageStyle: {
    resizeMode: "contain",
    width: wp("70%"),
    height: 50,
  },
  buttonContainer: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  ConnectImageStyle: {
    resizeMode: "contain",
    width: wp("53%"),
    height: hp("14%"),
  },
  bottomTextContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  tryManuallyImageStyle: {
    resizeMode: "contain",
    width: wp("30%"),
    height: hp("5%"),
  },
});

export default Welcome;
