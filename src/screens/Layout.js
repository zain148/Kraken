import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, Image, ImageBackground, Text } from "react-native";
import Images from "../assets/images/images";
import { widthPercentageToDP, heightPercentageToDP } from "react-native-responsive-screen";
import colors from "../config/Colors";
import AsyncStorage from "@react-native-community/async-storage";

const Layout = (props) => {
  const [compact, setCompact] = useState("false");
  const [scroll, setScroll] = useState("false");

  const checkingPreSelectedOption = async () => {
    const compact = await AsyncStorage.getItem("compact");
    const scroll = await AsyncStorage.getItem("scroll");
    setCompact(compact);
    setScroll(scroll);

    if (compact === "true") {
      alert("compact selected");
    } else if (scroll === "true") {
      alert("scroll selected");
    } else {
      alert("Nothing selected");
    }
  };

  //call on initial DidMount()
  useEffect(() => {
    checkingPreSelectedOption();
  }, []);

  const CompactSelect = async () => {
    await AsyncStorage.setItem("compact", "true");
    await AsyncStorage.setItem("scroll", "false");
    setScroll("false"), setCompact("true");
  };

  const ScrollSelect = async () => {
    await AsyncStorage.setItem("compact", "false");
    await AsyncStorage.setItem("scroll", "true");
    setScroll("true"), setCompact("false");
  };

  return (
    <ImageBackground
      style={styles.backgroundImage}
      imageStyle={styles.imageStyle}
      source={Images.BackgroundOne}
    >
      <View style={styles.container}>
        <View style={styles.HeaderTextContainer}>
          <Image source={Images.LayoutHeader} style={styles.HeaderTextStyle} />
        </View>

        <View style={styles.CenterBlock}>
          {/* Compact and ScrollButton */}
          <View style={styles.ButtonContainer}>
            {compact === "true" ? (
              <TouchableOpacity style={styles.AlignBlock} onPress={() => CompactSelect()}>
                <Image source={Images.CompactButton} style={styles.ButtonStyle} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => CompactSelect()} style={styles.scrollTextBlock}>
                <Text style={styles.textStyle}>COMPACT</Text>
              </TouchableOpacity>
            )}

            {scroll === "true" ? (
              <TouchableOpacity onPress={() => ScrollSelect()} style={styles.AlignBlock}>
                <Image
                  source={Images.ScrollButton}
                  style={[styles.ButtonStyle, { marginLeft: 10 }]}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => ScrollSelect()} style={styles.scrollTextBlock}>
                <Text style={[styles.textStyle]}>SCROLL</Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Sliders */}

          <View style={styles.slidersContainer}>
            {/**Mobile */}
            <TouchableOpacity onPress={() => alert("Mobile Orientation")}>
              <Text style={{ fontSize: 12, color: colors.lightOrange }}>MOBILE ORIENTED</Text>
              <Image source={Images.MobileOr} style={styles.OrientationImage} />
            </TouchableOpacity>

            {/**Tablet */}
            <TouchableOpacity onPress={() => alert("Tablet Orientation")}>
              <Text style={{ fontSize: 12, color: colors.lightOrange }}>TABLET ORIENTED</Text>
              <Image source={Images.TabletOr} style={styles.OrientationImage} />
            </TouchableOpacity>
          </View>

          {/* Ok_Button */}

          <TouchableOpacity
            onPress={() => {
              if (compact === "true") {
                props.navigation.navigate("ColorPicker");
              } else if (scroll === "true") {
                props.navigation.navigate("ScrollColorPicker");
              } else {
                props.navigation.navigate("ColorPicker");
              }
            }}
          >
            <View>
              <Image source={Images.OkButton} style={styles.OkButtonStyle} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.FooterTextContainer}>
          <Image source={Images.LayoutFooter} style={styles.FooterTextStyle} />
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
  HeaderTextContainer: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  HeaderTextStyle: {
    resizeMode: "contain",
    width: widthPercentageToDP("55%"),
  },
  CenterBlock: {
    flex: 5,
  },
  ButtonContainer: {
    flexDirection: "row",
    alignSelf: "center",
    height: heightPercentageToDP("9.6%"),
    width: widthPercentageToDP("85%"),
    borderRadius: 30,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  scrollTextBlock: {
    justifyContent: "center",
    alignSelf: "center",
  },
  textStyle: {
    marginLeft: 50,
    fontSize: 20,
    textAlign: "center",
    color: colors.lightBrown,
  },
  ButtonStyle: {
    resizeMode: "contain",
    height: heightPercentageToDP("10%"),
    width: widthPercentageToDP("42"),
  },
  slidersContainer: {
    marginTop: 20,
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    width: widthPercentageToDP("85%"),
    height: heightPercentageToDP("20%"),
  },
  OrientationImage: {
    resizeMode: "contain",
    height: 50,
    width: 50,
    marginTop: 10,
    alignSelf: "center",
    tintColor: colors.lightBrown,
  },
  OkButtonStyle: {
    alignSelf: "center",
    resizeMode: "contain",
    width: widthPercentageToDP("60%"),
  },
  FooterTextContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  FooterTextStyle: {
    resizeMode: "contain",
    width: widthPercentageToDP("85%"),
  },
});

export default Layout;
