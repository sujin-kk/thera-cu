import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BackHeader from "../components/BackHeader";
import color from "../theme/color";

const Statistics = () => {

  return(
    <View style={{ backgroundColor: color.BACKGROUND, height: '100%'}}>
      <BackHeader screen="통계"></BackHeader>   

      <View style={{marginTop: 15, marginLeft: 20}}>
        <Text style={{fontSize:16, fontWeight: '700'}}>명상 시간</Text>
        <Text style={{ color: color.GRAY_800, fontSize: 15, marginTop: 10 }}>
          당신은 지금까지
        </Text>
        <Text
          style={{
            color: color.GRAY_800,
            fontSize: 30,
            marginTop: 10,
            fontWeight: "bold",
          }}
        >
          37
          <Text
            style={{
              color: color.GRAY_800,
              fontSize: 15,
              fontWeight: "normal",
            }}
          >
            시간 동안 테라쿠와 함께했어요.
          </Text>
        </Text>
        <Image
          source={require("../assets/pngImage/img_statistics_time.png")}></Image>
      </View>

      <View style={{marginTop: 30, marginLeft: 20}}>
        <Text style={{fontSize:16, fontWeight: '700'}}>명상 순위</Text>
        <Text style={{ color: color.GRAY_800, fontSize: 15, marginTop: 10 }}>
          당신의 테라쿠 순위는
        </Text>
        <Text
          style={{
            color: color.GRAY_800,
            fontSize: 30,
            marginTop: 10,
            fontWeight: "bold",
            marginRight:10
          }}
        >
          1852
          <Text
            style={{
              color: color.GRAY_800,
              fontSize: 15,
              fontWeight: "normal",
            }}
          >
              위에 위치하고 있어요.
          </Text>
        </Text>
        <Image
          source={require("../assets/pngImage/img_statistics_rank.png")}></Image>
      </View>

    </View>
    
   
  )
}
export default Statistics;