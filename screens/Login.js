import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Login = () => {
  const navigation = useNavigation();
  const onLogin = () => {
    navigation.navigate("MainStack", {
      screen: "MainTabs",
    });
  };

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <TouchableOpacity
        style={{ width: "100%", height: "100%" }}
        onPress={onLogin}
      ></TouchableOpacity>
    </View>
  );
};

export default Login;
