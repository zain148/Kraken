import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet, ImageBackground } from "react-native";
import Images from "../assets/images/images";
import colors from "../config/Colors";

//ColorPicker
const ScrollColorPicker = () => {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      imageStyle={styles.imageStyle}
      source={Images.BackgroundOne}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerButtons}>
            <TouchableOpacity onPress={() => alert("setting button")}>
              <Image style={styles.headerSettingImage} source={Images.ScrollSetting} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("RT1 BUTTON")}>
              <Image source={Images.Rt1} style={styles.RtButtons} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("RT2 button")}>
              <Image source={Images.Rt2} style={styles.RtButtons} />
            </TouchableOpacity>
          </View>

          {/* Picker_View */}
        </View>

        <View style={styles.headerTab}>
          <Image source={Images.tab} style={styles.TabImageStyle} />
        </View>

        {/**Bottom Buttons */}
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
  headerTab: {
    flex: 6,
    marginLeft: 35,
  },
  headerButtons: {
    flexDirection: "row",
    margin: 10,
  },
  headerSettingImage: {
    resizeMode: "contain",
    width: 50,
    height: 50,
    marginTop: 30,
    marginLeft: 35,
  },
  RtButtons: {
    resizeMode: "contain",
    width: 90,
    height: 70,
    marginTop: 20,
    marginLeft: 5,
  },
  bottom: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  TabContainer: {
    marginLeft: 35,
  },
  TabImageStyle: {
    resizeMode: "contain",
    width: "90%",
    height: 200,
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
export default ScrollColorPicker;
