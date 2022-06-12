import React from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import BackIc from "../assets/svgIcon/BackIc";
import { Platform } from 'react-native';
import GlobalStyled from "../theme/GlobalStyled";
import { useNavigation } from "@react-navigation/native";

const BackHeader = ( props ) => {
  const navigation = useNavigation();
  const statusBarHeight =
    Platform.OS === "ios" ? getStatusBarHeight(true) : StatusBar.currentHeight;

  return (
    <GlobalStyled.ViewRow
      style={{
        height: 54,
        paddingHorizontal: 24,
        marginTop: statusBarHeight,
        justifyContent: "flex-start",
      }}
    >
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <BackIc />
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "bold", textAlign: "center", fontSize: 16 }}>
          {props.screen}
        </Text>
      </View>
      <View style={{ flex: 1 }}></View>
    </GlobalStyled.ViewRow>
  );
};

export default BackHeader;
