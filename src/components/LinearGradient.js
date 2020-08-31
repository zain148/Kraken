import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/Colors/Colors";
import { heightPercentageToDP } from "react-native-responsive-screen";
const linearGradient = () => {
  return (
    <LinearGradient
      colors={[colors.darkLightBlueDark, colors.lightJamno, "rgba(0,0,0,0.8)"]}
      style={{
        position: "absolute",
        width: "100%",
        height: heightPercentageToDP("100%"),
      }}
    />
  );
};

export default linearGradient;
