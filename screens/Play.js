import React from "react";
import { View, Text, StatusBar } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Platform } from "react-native";
import color from "../theme/color";
import GlobalStyled from "../theme/GlobalStyled";
import BackHeader from "../components/BackHeader";

const Play = ({ props }) => {
  const statusBarHeight =
    Platform.OS === "ios" ? getStatusBarHeight(true) : StatusBar.currentHeight;

  return (
    <GlobalStyled.ViewCol
      style={{
        backgroundColor: color.BACKGROUND,
        justifyContent: "flex-start",
      }}
    >
      <BackHeader />
    </GlobalStyled.ViewCol>
  );
};

export default Play;
