import React, { Component, useEffect, useState } from "react";
import { FlatList, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyled from "../theme/GlobalStyled";
import { SwipeListView } from "react-native-swipe-list-view";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import color from "../theme/color";
import LikePageRow from "./LikePageRow";

export default MyList = ({ title, data }) => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    setMyData(data);
  }, []);

  const renderItem = ({ item }) => {
    return <LikePageRow item={item} type={"myList"} />;
  };

  const renderHiddenItem = ({ item }) => {
    return (
      <GlobalStyled.ViewRow
        style={{
          width: 120,
          height: wp(28),
          backgroundColor: color.RED,
          borderRadius: 10,
          marginVertical: 10,
          paddingHorizontal: 10,
          alignSelf: "flex-end",
        }}
        as={TouchableOpacity}
      >
        <Text
          style={{ color: color.WHITE, marginStart: 20, fontWeight: "bold" }}
        >
          삭제
        </Text>
      </GlobalStyled.ViewRow>
    );
  };

  return (
    <GlobalStyled.ViewCol>
      <SwipeListView
        bounces={false}
        data={myData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-100}
        stopRightSwipe={-100}
        previewOpenValue={-40}
        friction={10}
        tension={-2}
        previewOpenDelay={2000}
        style={{ marginTop: 20 }}
      />
    </GlobalStyled.ViewCol>
  );
};
