import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Login = () => {
  const navigation = useNavigation();
  const onLogin = () => {
    navigation.navigate("MainTabs", {
      screen: "Home",
    });
  };

  return (
    <View>
      <Text>로그인 스크린</Text>
      <TouchableOpacity onPress={onLogin}></TouchableOpacity>
    </View>
  );
};

export default Login;
