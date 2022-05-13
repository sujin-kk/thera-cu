import React from "react";
import Carousel from "react-native-snap-carousel";
import { View, Image } from "react-native";

export default HomeCarousel = ({ data }) => {
  const renderItem = ({ item, index }) => {
    return (
      <View style={{ width: 110, height: 110 }}>
        <Image
          style={{ width: 110, height: 110, borderRadius: 400 }}
          source={item.path}
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        layout={"default"}
        ref={(c) => {
          this._carousel = c;
        }}
        data={data}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={100}
      />
    </View>
  );
};
