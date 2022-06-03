import React, { useEffect } from "react";
import Root from "./navigation/Root";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "react-native-splash-screen";
import MainStack from "./navigation/MainStack";
import LoginStack from "./navigation/LoginStack";

//const Stack = createStackNavigator();
const Nav = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  },[]);

  console.disableYellowBox = true;
  return (
    
  <NavigationContainer>
    <Nav.Navigator
      screenOptions={{
      headerShown: false,
      presentation: "transparentModal",
   }}
  >
      <Nav.Screen name="LoginStack" component={LoginStack} />
      <Nav.Screen name="MainStack" component={MainStack} />
    </Nav.Navigator>
  </NavigationContainer>
  );
}