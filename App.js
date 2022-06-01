import React from "react";
import Root from "./navigation/Root";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";

import MainStack from "./navigation/MainStack";
import LoginStack from "./navigation/LoginStack";

//const Stack = createStackNavigator();
const Nav = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Nav.Navigator
      screenOptions={{
      headerShown: false,
      presentation: "transparentModal",
   }}
  >
      <Nav.Screen name="MainStack" component={MainStack} />
      <Nav.Screen name="LoginStack" component={LoginStack} />
    </Nav.Navigator>
  </NavigationContainer>
  );
}