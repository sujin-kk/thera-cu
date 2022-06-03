import React from "react";
import { Image, View } from "react-native";

const HomeImage = ({ path }) => {
  return (
    <View style={{ width: 120, height: 120 }}>
      <Image
        style={{ borderRadius: 7, width: "100%", height: "100%" }}
        source={path}
      />
      <Image
        style={{
          width: 14,
          height: 16,
          position: "relative",
          bottom: 26,
          left: 95,
        }}
        source={require("../assets/pngIcon/ic_play.png")}
      />
    </View>
  );
};

export default HomeImage;
