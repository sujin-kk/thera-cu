import React from "react";
import { Image, View } from "react-native";

const MyPageImage = ({ path }) => {
  return (
    <View style={{ width: 120, height: 120, }}>
      <Image
        style={{ borderRadius: 7, width: "100%", height: "100%" }}
        source={path}
      />
      <Image
        style={{
          width: 20,
          height: 23,
          position: "relative",
          bottom: 70,
          left:53,
        }}
        source={require("../assets/pngIcon/ic_play.png")}
      />
    </View>
  );
};

export default MyPageImage;
