import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import color from "../theme/color";
import LinearGradient from "react-native-linear-gradient";
import HomeCarousel from "../components/HomeCarousel";
import HomeList from "../components/HomeList";
import ApiService from "../util/ApiService";

const Home = () => {
  const data = ApiService().getMeditationList().list;
  const trendData = ApiService().getTrendList().list;
  const topData = ApiService().getHomeTopList().list;

  return (
    <ScrollView
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: color.BACKGROUND,
      }}
      contentContainerStyle={{
        flex: 1,
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
        <Text style={{ color: color.GRAY_800, fontSize: 15, marginTop: 60 }}>
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
            시간 동안 테라쿠와 함께했어요
          </Text>
        </Text>
        <HomeCarousel data={topData} />
      </LinearGradient>

      <HomeList title="당신의 편안한 마음을 위한 명상 리스트" data={data} />
      <View style={{ width: "100%", height: 30 }}></View>
      <HomeList title="인기있는 명상 음악" data={trendData} />
    </ScrollView>
  );
};

export default Home;
