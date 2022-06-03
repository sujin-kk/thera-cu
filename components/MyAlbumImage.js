import React from "react";
import { Image, View } from "react-native";
import GlobalStyled from "../theme/GlobalStyled";

const MyAlbumImage = ({ path }) => {
  return (
    <GlobalStyled.ViewCol style={{ width: 80, height: 80 }}>
      <Image
        style={{ borderRadius: 7, width: "100%", height: "100%" }}
        source={path}
      />
      <Image
        style={{
          width: 10,
          height: 14,
          position: "absolute",
          bottom: 10,
          right: 10,
        }}
        source={require("../assets/pngIcon/ic_play.png")}
      />
    </GlobalStyled.ViewCol>
  );
};

export default MyAlbumImage;
