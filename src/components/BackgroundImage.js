import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Wrapper = ({ children }) => {
  return (
    <ImageBackground source={children.backgroundImage} style={styles.backgroundImage}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    display: "flex",
  },
});

export default Wrapper;
