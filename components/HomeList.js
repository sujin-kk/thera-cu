import React from "react";
import { FlatList, View, Text, Image, TouchableOpacity } from "react-native";
import color from "../theme/color";
import HomeImage from "./HomeImage";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default HomeList = ({ title, data }) => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "column",
          width: 120,
          height: "100%",
        }}
        onPress={() => {
          navigation.navigate("Play", {
            id: item.id,
          });
        }}
      >
        <HomeImage path={item.path} />
        <Text style={{ marginTop: 5 }}>{item.name}</Text>
      </TouchableOpacity>
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
