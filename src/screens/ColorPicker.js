import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Dimensions,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import Images from "../assets/images/images";
import colors from "../config/Colors";
import { SliderValuePicker } from "react-native-slider-color-picker";

import tinycolor from "tinycolor2";
const { width } = Dimensions.get("window");

//Color_Wheel
const ColorPicker = () => {
  const data = [
    {
      id: "L1",
      color: "red",
    },
    {
      id: "L2",
      color: "blue",
    },
    {
      id: "L3",
      color: "green",
    },
    {
      id: "L4",
      color: "brown",
    },
    {
      id: "L5",
      color: "pink",
    },
  ];

  const [oldColor, setOldColor] = useState("#FF7700");

  const changeColor = (colorHsvOrRgb, resType) => {
    if (resType === "end") {
      const setColor = tinycolor(colorHsvOrRgb).toHexString();
      setOldColor(setColor);

      console.log(tinycolor(colorHsvOrRgb).toHexString());
    }
  };

  return (
    <ImageBackground
      style={styles.backgroundImage}
      imageStyle={styles.imageStyle}
      source={Images.BackgroundOne}
    >
      <View style={styles.container}>
        <ImageBackground
          style={styles.headerImagebackgroundStyle}
          imageStyle={[styles.headerImagebackgroundStyle, { marginVertical: 10 }]}
          source={Images.PlaceHolder}
        >
          <View style={styles.headerScrollViewContainer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ flex: 1 }}
            >
              {data.map((value, index) => {
                const [selectedColor, setSelectedColor] = useState("transparent");

                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedColor(colors.ButtonColor);
                      alert(`Your ${value.id} color is ${value.color}`);
                      setTimeout(() => {
                        setSelectedColor("transparent");
                      }, 2000);
                    }}
                    key={index}
                    style={[
                      styles.headerScrollViewInsideContainer,
                      { backgroundColor: selectedColor },
                    ]}
                  >
                    <Text style={{ color: colors.lightBrown }}>{value.id}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </ImageBackground>

        <View style={styles.center}>
          <View style={{ height: 100, width: 100 }}>
            <Text>Hello</Text>
          </View>

          {/* Slider */}
          <View
            style={{ flex: 1, marginHorizontal: 24, marginTop: 20, height: 12, width: width - 48 }}
          >
            <SliderValuePicker
              /** ref={(view) => {
                this.sliderValuePicker = view;
              }}
               */
              oldColor={oldColor}
              minimumValue={0.02}
              step={0.05}
              trackStyle={[{ height: 12, width: width - 48 }]}
              trackImage={require("react-native-slider-color-picker/brightness_mask.png")}
              thumbStyle={styles.thumb}
              onColorChange={changeColor()}
              style={{ height: 12, borderRadius: 6, backgroundColor: "black" }}
            />
          </View>
        </View>

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
  headerImagebackgroundStyle: {
    width: "100%",
    marginVertical: 15,
    height: 50,
  },
  headerScrollViewContainer: {
    flexDirection: "row",
    width: "100%",
    height: 60,
  },
  headerScrollViewInsideContainer: {
    width: 100,
    marginTop: 10,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
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
