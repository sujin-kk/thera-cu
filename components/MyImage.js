import React from "react";
import { Image, View } from "react-native";

const MyImage = ({ path }) => {
  return (
    <View style={{width: 375, height: "100%"}}>
      
      <Image
        style={{ 
          borderRadius: 7,
          backgroundColor:"#F9FAFF",
          width: 375, 
          height: 120,

        }}
        source={require("../assets/pngImage/ic_list_frame.png")}
      />

      <Image
        style={{ 
          borderRadius: 7, 
          width: 85, 
          height: 85,
          position: "absolute",
          top:15,
          right:17,
        }}
        source={path}
      />
      <Image
        style={{
          width: 14,
          height: 16,
          position: "absolute",
          top:75,
          right:22,
        }}
        source={require("../assets/pngIcon/ic_play.png")}
      />

    </View>

  );
};

export default MyImage;
