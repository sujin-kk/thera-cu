import React, { Component } from "react";
import { View, Dimensions, Platform, StatusBar } from "react-native";

import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import { getStatusBarHeight } from "react-native-status-bar-height";
import styled from "styled-components/native";
import color from "../theme/color";
import ApiService from "../util/ApiService";
import LikeList from "../components/LikeList";
import MyList from "../components/MyList";

const statusBarHeight =
  Platform.OS === "ios" ? getStatusBarHeight(true) : StatusBar.currentHeight;
const windowWidth = Dimensions.get("window").width;

const Like = () => {
  //isLike=true만 출력.
  function isLike(element) {
    if (element.isLike) return true;
  }
  const likedata = ApiService().getMeditationList().list.filter(isLike);

  const mydata = ApiService().getMyList().list;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "좋아요" },
    { key: "second", title: "내 리스트" },
  ]);

  const FirstRoute = () => (
    <View style={{ flex: 1 }}>
      <LikeList style={{}} title="TEST" data={likedata} />
    </View>
  );

  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: "#F9FAFF" }}>
      <MyList
        style={{ flex: 1, position: "relative" }}
        title=""
        data={mydata}
      />
    </View>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <LikeView>
      <HeaderText>즐겨찾기</HeaderText>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: windowWidth }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            activeColor={"#614692"}
            inactiveColor={color.GRAY_500}
            indicatorStyle={{
              backgroundColor: "#614692",
              border: "bold",
              marginLeft: 103 - 40,
              width: 80,
            }}
            style={{
              backgroundColor: "#F9FAFF",
              fontWeight: 900,
              //marginBottom:10,
              shadowOffset: { height: 1, width: 1 },
              shadowColor: "#614692",
            }}
            pressColor={"transparent"}
          />
        )}
      />
    </LikeView>
  );
};

const LikeView = styled.View`
  background-color: #f9faff;
  width: 100%;
  height: 100%;
`;

const HeaderText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin-top: ${statusBarHeight + 15}px;
  margin-left: 25px;
`;

export default Like;
