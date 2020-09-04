import React from "react";
import {
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Images from "../assets/images/images";
import colors from "../config/Colors";
import {
  SliderHuePicker,
  SliderSaturationPicker,
  SliderValuePicker,
} from "react-native-slider-color-picker";

import tinycolor from "tinycolor2";
const { width } = Dimensions.get("window");

//ColorPicker
class ScrollColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oldColor: "#FF7700",
      Rt1: false,
      Rt2: false,
    };
  }

  changeColor = (colorHsvOrRgb, resType) => {
    if (resType === "end") {
      this.setState({
        oldColor: tinycolor(colorHsvOrRgb).toHexString(),
      });
      console.log(tinycolor(colorHsvOrRgb).toHexString());
    }
  };

  render() {
    const { oldColor } = this.state;

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
              <TouchableOpacity
                onPress={() => {
                  alert("Rt1 Button");
                  this.setState({ Rt1: true, Rt2: false });
                }}
              >
                <Image
                  source={Images.Rt1}
                  style={[
                    styles.RtButtons,
                    {
                      backgroundColor: this.state.Rt1 === true ? "white" : "transparent",
                      marginTop: 40,
                      height: 35,
                      backfaceVisibility: "visible",
                    },
                  ]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  alert("Rt2 Button");
                  this.setState({ Rt1: false, Rt2: true });
                }}
              >
                <Image
                  source={Images.Rt2}
                  style={[
                    styles.RtButtons,
                    {
                      backgroundColor: this.state.Rt2 === true ? "white" : "transparent",
                      marginTop: 40,
                      height: 35,
                      backfaceVisibility: "visible",
                    },
                  ]}
                />
              </TouchableOpacity>
            </View>

            {/* Picker_View */}
          </View>

          <View style={styles.headerTab}>
            <ImageBackground
              source={Images.tab}
              imageStyle={{ marginLeft: 17, marginTop: -20 }}
              style={styles.TabImageStyle}
            >
              <View style={styles.containerImage}>
                <View
                  style={{ marginHorizontal: 24, marginTop: 20, height: 12, width: width - 48 }}
                >
                  <SliderHuePicker
                    ref={(view) => {
                      this.sliderHuePicker = view;
                    }}
                    oldColor={oldColor}
                    trackStyle={[{ height: 12, width: width - 48 }]}
                    thumbStyle={styles.thumb}
                    onColorChange={this.changeColor}
                  />
                </View>
                <View
                  style={{ marginHorizontal: 24, marginTop: 20, height: 12, width: width - 48 }}
                >
                  <SliderSaturationPicker
                    ref={(view) => {
                      this.sliderSaturationPicker = view;
                    }}
                    oldColor={oldColor}
                    trackStyle={[{ height: 12, width: width - 48 }]}
                    thumbStyle={styles.thumb}
                    onColorChange={this.changeColor}
                    style={{
                      height: 12,
                      borderRadius: 6,
                      backgroundColor: tinycolor({
                        h: tinycolor(oldColor).toHsv().h,
                        s: 1,
                        v: 1,
                      }).toHexString(),
                    }}
                  />
                </View>
                <View
                  style={{ marginHorizontal: 24, marginTop: 20, height: 12, width: width - 48 }}
                >
                  <SliderValuePicker
                    ref={(view) => {
                      this.sliderValuePicker = view;
                    }}
                    oldColor={oldColor}
                    minimumValue={0.02}
                    step={0.05}
                    trackStyle={[{ height: 12, width: width - 48 }]}
                    trackImage={require("react-native-slider-color-picker/brightness_mask.png")}
                    thumbStyle={styles.thumb}
                    onColorChange={this.changeColor}
                    style={{ height: 12, borderRadius: 6, backgroundColor: "black" }}
                  />
                </View>
              </View>
            </ImageBackground>
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
  containerImage: {
    flex: 1,
    alignItems: "center",
  },
  thumb: {
    width: 20,
    height: 20,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 0.35,
  },
  container: {
    flex: 8,
  },
  header: {
    flex: 1,
  },
  headerTab: {
    flex: 6,
    marginLeft: 5,
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
    marginLeft: 5,
  },
  RtButtons: {
    resizeMode: "contain",
    width: 100,
    height: 85,
    marginTop: 20,
    marginLeft: 5,
  },
  bottom: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  TabContainer: {
    marginLeft: 15,
  },
  TabImageStyle: {
    resizeMode: "contain",
    width: "96%",
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
