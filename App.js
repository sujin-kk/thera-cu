import "react-native-gesture-handler";
import React from "react";
import Root from "./navigation/Root";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
