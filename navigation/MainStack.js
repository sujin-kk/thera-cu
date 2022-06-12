import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabs from "./MainTabs";
import Play from "../screens/Play";
import Statistics from "../screens/Statistics";

const NativeStack = createNativeStackNavigator();

const MainStack = () => (
  <NativeStack.Navigator
    screenOptions={{
      animation: "fade",
      headerShown: false,
    }}
  >
    <NativeStack.Screen name="MainTabs" component={MainTabs} />
    <NativeStack.Screen name="Play" component={Play} />
    <NativeStack.Screen name="Statistics" component={Statistics} />
  </NativeStack.Navigator>
);

export default MainStack;
