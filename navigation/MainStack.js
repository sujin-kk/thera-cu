import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabs from "./MainTabs";

const NativeStack = createNativeStackNavigator();

const MainStack = () => (
  <NativeStack.Navigator
    screenOptions={{
      animation: "fade",
      headerShown: false,
    }}
  >
    <NativeStack.Screen name="MainTabs" component={MainTabs} />
  </NativeStack.Navigator>
);

export default MainStack;
