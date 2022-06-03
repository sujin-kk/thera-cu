import React, { useState, useEffect } from "react";
import { FlatList, View, Text, Image, TouchableOpacity } from "react-native";
import LikeImage from "./LikeImage";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import LikePageRow from "./LikePageRow";
import GlobalStyled from "../theme/GlobalStyled";

export default LikeList = ({ title, data }) => {
  const [likeData, setLikeData] = useState([]);

  useEffect(() => {
    setLikeData(data);
  }, []);

  const renderItem = ({ item }) => {
    return <LikePageRow item={item} type={"like"} />;
  };

  return (
    <GlobalStyled.ViewCol>
      <FlatList
        vertical
        persistentScrollbar={true}
        data={likeData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id + ""}
        style={{ marginTop: 20 }}
      />
    </GlobalStyled.ViewCol>
  );
};

const CardHash = styled.View`
  border-radius: 30px;
  background-color: rgba(196, 196, 196, 0.25);
  padding: 2px;
  margin-right: 3px;
  align-items: center;
  left: 130px;
  top: 47px;
`;

const HashTagFrame = styled.View``;
