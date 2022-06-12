import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import color from "../theme/color";
import LinearGradient from "react-native-linear-gradient";
import HomeCarousel from "../components/HomeCarousel";
import HomeList from "../components/HomeList";
import ApiService from "../util/ApiService";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Home = () => {
  const data = ApiService().getMeditationList().list;
  const trendData = ApiService().getTrendList().list;
  const topData = ApiService().getHomeTopList().list;
  const date = new Date();
  return (
    <ScrollView
      style={{
        flexDirection: "column",
        backgroundColor: color.BACKGROUND,
      }}
    >
      <LinearGradient
        colors={["#FEE2FE", "#DAE8FF", "#F9FAFF"]}
        style={{ flexDirection: "column", flex: 1, paddingHorizontal: 20 }}
      >
        <Image
          style={{ width: 120, height: 40, marginTop: 40 }}
          source={require("../assets/pngImage/img_logo.png")}
        />
        <Text style={{ color: color.GRAY_800, fontSize: 15, marginTop: 25 }}>
          오늘의 추천
        </Text>
        <Text style={{color: color.GRAY_800, fontSize: 18, marginTop: 15}}>
            최근에 재생한 명상과
        </Text>
        <Text
          style={{
            color: color.GRAY_800,
            fontSize: 18,
            marginTop: 10,
            fontWeight: "bold",
          }}
        >
         비슷한 명상
         <Text style={{color: color.GRAY_800,
            fontSize: 18,
            marginTop: 10,
            fontWeight:'normal'}}>
          들을 확인해보세요.
         </Text>
        </Text>
        <Text style={{marginTop: 15}}>
          {date.getFullYear() + "." + (date.getMonth()+1) + "." + date.getDate()} 기준
        </Text>
        <HomeCarousel data={topData} />
      </LinearGradient>

      <HomeList title="당신의 편안한 마음을 위한 명상 리스트" data={data} />
      <View style={{ width: "100%", height: wp(5) }}></View>
      <HomeList title="인기있는 명상 음악" data={trendData} />
    </ScrollView>
  );
};

export default Home;
