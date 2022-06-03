import React, { Component, useEffect, useState } from "react";
import { FlatList, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyled from "../theme/GlobalStyled";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import color from "../theme/color";
import shadow from "../theme/shadow";
import MyAlbumImage from "./MyAlbumImage";
import ToggleActive from "../assets/svgIcon/ToggleActive";
import ToggleInactive from "../assets/svgIcon/ToggleInactive";
import LikeActive from "../assets/svgIcon/LikeActive";
import LikeGray from "../assets/svgIcon/LikeGray";
import TagButton from "./TagButton";

const LikePageRow = ({ item, type }) => {
  const navigation = useNavigation();
  const [isAlarm, setIsAlarm] = useState(item.isAlarm);
  const [isLike, setIsLike] = useState(item.isLike);

  return (
    <GlobalStyled.ViewRow
      style={{
        width: wp(90),
        height: wp(28),
        backgroundColor: color.BACKGROUND,
        borderRadius: 10,
        ...shadow.middle,
        marginVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: color.GRAY_100,
      }}
    >
      <TouchableOpacity
        style={{ flex: 1, marginEnd: 20 }}
        onPress={() => {
          navigation.navigate("Play", {
            id: item.id,
          });
        }}
      >
        <MyAlbumImage path={item.path} />
      </TouchableOpacity>

      {type === "like" ? (
        <GlobalStyled.ViewCol
          style={{ flex: 3, alignItems: "flex-start", marginStart: 8 }}
        >
          <Text style={{ marginBottom: 8, fontSize: 15 }}>{item.name}</Text>
          <GlobalStyled.ViewRow
            style={{ height: "auto", justifyContent: "flex-start" }}
          >
            {item.tag.map((name) => {
              return <TagButton id={name} name={name} type={"small"} />;
            })}
          </GlobalStyled.ViewRow>
          <Text style={{ fontSize: 9, color: color.GRAY_600, marginTop: 8 }}>
            {item.detail}
          </Text>
        </GlobalStyled.ViewCol>
      ) : (
        <GlobalStyled.ViewCol
          style={{ flex: 3, alignItems: "flex-start", marginStart: 20 }}
        >
          <Text style={{ marginBottom: 10, fontSize: 15 }}>{item.name}</Text>
          <Text style={{ fontSize: 18 }}>
            {item.day}
            {"  "}
            <Text style={{ fontSize: 24, fontWeight: "500" }}>{item.time}</Text>
          </Text>
        </GlobalStyled.ViewCol>
      )}

      {type === "like" ? (
        <TouchableOpacity
          style={{
            flex: 1,
            alignSelf: "flex-start",
            position: "absolute",
            right: 15,
            top: 15,
          }}
          onPress={() => {
            setIsLike(!isLike);
          }}
        >
          {isLike ? <LikeActive /> : <LikeGray />}
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => {
            setIsAlarm(!isAlarm);
          }}
        >
          {isAlarm ? <ToggleActive /> : <ToggleInactive />}
        </TouchableOpacity>
      )}
    </GlobalStyled.ViewRow>
  );
};

export default LikePageRow;
