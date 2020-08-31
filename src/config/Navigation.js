import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import WelcomeScreen from "../screens/Welcome";
import TryManually from "../screens/TryManually";
import Connecting from "../screens/Connecting";
import Layout from "../screens/Layout";
import ColorPicker from "../screens/ColorPicker";
import ScrollColorPicker from "../screens/ScrollColorPicker";

//Stack_Navigator
const NavigationStack = createStackNavigator(
  {
    WelcomeScreen: {
      screen: WelcomeScreen,
    },
    TryManually: {
      screen: TryManually,
    },
    Connecting: {
      screen: Connecting,
    },
    Layout: {
      screen: Layout,
    },
    ColorPicker: {
      screen: ColorPicker,
    },
    ScrollColorPicker: {
      screen: ScrollColorPicker,
    },
  },

  {
    initialRouteName: "WelcomeScreen",
    mode: "card",
    headerMode: "none",
  }
);

//Wrapper
const Navigator = createAppContainer(NavigationStack);

export default Navigator;
