import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  ImageStore,
} from "react-native";
import Images from "../assets/images/images";
import colors from "../config/Colors";

//ColorPicker
const ColorPicker = () => {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      imageStyle={styles.imageStyle}
      source={Images.BackgroundOne}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerStyle}></View>
        </View>

        <View style={styles.center}></View>

        <View style={styles.bottom}>
          <TouchableOpacity
            onPress={() => alert("Group Button")}
            style={[styles.insideBottom, { marginLeft: 10 }]}
          >
            <Image source={Images.Group} style={styles.bottomImageStyle} />
            <Text style={styles.bottomTextStyle}>GROUP</Text>
          </TouchableOpacity>
          {/* Setting */}
          <TouchableOpacity
            onPress={() => alert("Settings Button")}
            style={[styles.insideBottom, { marginRight: 10 }]}
          >
            <Text style={styles.bottomTextStyle}>SETTINGS</Text>
            <Image source={Images.Setting} style={styles.bottomImageStyle} />
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
    flex: 8,
  },
  header: {
    flex: 1,
  },
  headerStyle: {
    height: 50,
    marginTop: 30,
    width: "100%",
    backgroundColor: "#2B2B52",
  },
  center: {
    flex: 6,
  },
  bottom: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  insideBottom: {
    flexDirection: "row",
  },
  bottomTextStyle: {
    alignSelf: "center",
    margin: 10,
    color: colors.lightBrown,
  },
  bottomImageStyle: {
    resizeMode: "contain",
    height: 50,
    width: 50,
  },
});
export default ColorPicker;
