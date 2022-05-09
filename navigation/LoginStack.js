import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import SignIn from "../screens/SignIn";

const NativeStack = createNativeStackNavigator();

const LoginStack = () => (
  <NativeStack.Navigator
    screenOptions={{
      animation: "fade",
      headerShown: false,
    }}
  >
    <NativeStack.Screen name="Login" component={Login} />
    <NativeStack.Screen name="SignIn" component={SignIn} />
  </NativeStack.Navigator>
);

export default LoginStack;
