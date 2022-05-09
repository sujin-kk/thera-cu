import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainStack from "./MainStack";
import LoginStack from "./LoginStack";

const Nav = createNativeStackNavigator();

const Root = () => (
  <Nav.Navigator
    screenOptions={{
      headerShown: false,
      presentation: "transparentModal",
    }}
  >
    <Nav.Screen name="LoginStack" component={LoginStack} />
    <Nav.Screen name="MainStack" component={MainStack} />
  </Nav.Navigator>
);

export default Root;
