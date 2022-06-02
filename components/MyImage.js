import React,{useCallback, useState} from "react";
import { Image, View ,TouchableOpacity} from "react-native";

const MyImage = ({ path }) => {
  const [isAlarm,setIsAlarm]=useState(true);

  const changeImage=useCallback(()=>{
    setIsAlarm(prevIsAlarm=>!prevIsAlarm)
  },)

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
          left:34,
        }}
        source={path}
      />

      <Image
        style={{
          width: 14,
          height: 16,
          position: "absolute",
          top:75,
          left:99,
        }}
        source={require("../assets/pngIcon/ic_play.png")}
      />

      <View style={{width:51,height:28,position: "absolute",top:42,right:25}}>
      <TouchableOpacity onPress={changeImage}>
        <Image
        style={{
          resizeMode:"contain",
          width:51,
          height:28,
          left:17,
        }}
        source={isAlarm?require("../assets/pngImage/ic_list_on.png"):require("../assets/pngImage/ic_list_off.png")}
        />
      </TouchableOpacity>
      </View>

    </View>

  );
};

export default MyImage;
