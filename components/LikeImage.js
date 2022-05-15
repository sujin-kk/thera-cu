import React from "react";
import { Image, View,TouchableOpacity } from "react-native";

const LikeImage = ({ path }) => {
  return (
    <View style={{width: 375, height: "100%"}}>
      
      <Image
        style={{ 
          borderRadius: 7,
          backgroundColor:"#F9FAFF",
          width: 375, 
          height: 120,
          left:17,

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
          left:32,
        }}
        source={path}
      />
      <Image
        style={{
          width: 14,
          height: 16,
          position: "absolute",
          top:75,
          left:95,
        }}
        source={require("../assets/pngIcon/ic_play.png")}
      />

      {/* <TouchableOpacity onPress={this.changeImage}> */}
        <Image
        style={{
          resizeMode:"contain",
          width:22,
          height:20,
          position: "absolute",
          top:22,
          right:5,
        }}
        source={require("../assets/pngImage/ic_like_active.png")}
        />
      {/* </TouchableOpacity> */}
      
    </View>

  );
};

export default LikeImage;

// const changeImage=()=>{
//   this.setState({img:require("../assets/pngImage/ic_like_inactive.png")})
// }