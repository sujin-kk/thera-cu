import React,{useCallback, useState} from "react";
import { Image, View,TouchableOpacity} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import ApiService from "../util/ApiService";

const LikeImage = ({ path }) => {
  
  const [isLike,setIsLike]=useState(true);

    const changeImage=useCallback(()=>{
      setIsLike(prevIsLike=>!prevIsLike)
      ApiService().setMeditationList(isLike)
    },)

  
  return (
    <View style={{width: 375, height: "100%"}}> 
      <Image
        style={{ 
          borderRadius: 7,
          backgroundColor:"#F9FAFF",
          width: wp(93), 
          height: wp(28),
          left:wp(4),

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

      <View style={{width:22,height:20,position: "absolute",top:wp(5),right:wp(1)}}>
        <TouchableOpacity onPress={changeImage}>
        <Image
          style={{
            resizeMode:"contain",
            width:23,
            height:20,
          }}
          source={isLike?require("../assets/pngImage/ic_like_active.png"):require("../assets/pngImage/ic_like_dislike.png")}
          />
        </TouchableOpacity>
      </View>
      
  

    </View>
    
      


  );
};

export default LikeImage;

