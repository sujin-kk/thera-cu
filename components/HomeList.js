import React from "react";
import { FlatList, View, Text, Image } from "react-native";
import color from "../theme/color";
import HomeImage from "./HomeImage";

export default HomeList = ({ title, data }) => {
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: "column",
          width: 120,
          height: "100%",
        }}
      >
        <HomeImage path={item.path} />
        <Text style={{ marginTop: 5 }}>{item.name}</Text>
      </View>
    );
  };

  const HSeperator = () => {
    return <View style={{ width: 10 }}></View>;
  };

  return (
    <View
      style={{
        flexDirection: "column",
        height: "auto",
        paddingHorizontal: 20,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          color: color.GRAY_800,
          fontSize: 18,
          marginBottom: 10,
        }}
      >
        {title}
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={HSeperator}
        keyExtractor={(item) => item.id + ""}
      />
    </View>
  );
};
