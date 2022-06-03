import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  Platform,
  StatusBar,
  TextInput,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import styled from "styled-components/native";
import SearchList from "../components/SearchList";
import ApiService from "../util/ApiService";
import shadow from "../theme/shadow";

const statusBarHeight =
  Platform.OS === "ios" ? getStatusBarHeight(true) : StatusBar.currentHeight;
const windowWidth = Dimensions.get("window").width;
const hashTagList = [
  "수면",
  "안정",
  "ASMR",
  "휴식",
  "Theraphy",
  "여행",
  "치유",
  "직장인",
  "잔잔한",
];
const data = ApiService().getMeditationList().list;

const Search = () => {
  const [isPressed, setIsPressed] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [selectedTag, setSelectedTag] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const inputRef = useRef();

  const onPress = (idx) => {
    inputRef.current.clear();
    setSearchTitle("");
    const selected = isPressed.map((is, index) => {
      if (idx === index) is = !is;
      return is;
    });
    setIsPressed(selected);
    let pressed = hashTagList[idx];
    if (selected[idx]) setSelectedTag([...selectedTag, pressed]);
    else setSelectedTag(selectedTag.filter((tag) => tag != pressed));
  };

  const filteredTag = data.map((d) => {
    return d.tag.filter((h) => selectedTag.includes(h));
  });
  let byTag = [];
  for (let i = 0; i < filteredTag.length; i++) {
    if (filteredTag[i].length > 0) byTag.push(true);
    else byTag.push(false);
  }

  const searchResult = data.map((d, idx) => {
    if (byTag[idx]) {
      if (searchTitle == "") return true;
      else return d.name.includes(searchTitle) && searchTitle != "";
    } else {
      if (searchTitle == "") return false;
      else return d.name.includes(searchTitle) && searchTitle != "";
    }
  });

  return (
    <SearchView>
      <Header>
        <HeaderText>검색</HeaderText>
      </Header>

      <SearchBarWrap>
        <SearchIcon source={require("../assets/pngIcon/ic_search_bar.png")} />
        <SearchBar
          placeholder="제목을 입력하세요."
          placeholderTextColor="#C4C4C4"
          onChangeText={(text) => setSearchTitle(text)}
          ref={inputRef}
        ></SearchBar>
      </SearchBarWrap>

      <HashTagWrap>
        {hashTagList.map((tag, idx) => (
          <HashTag
            style={{ backgroundColor: isPressed[idx] ? "#614692" : "white" }}
            key={tag}
            onPress={() => {
              onPress(idx);
            }}
          >
            <Image
              style={{ marginLeft: 15 }}
              source={
                isPressed[idx]
                  ? require("../assets/pngIcon/ic_hash_tag_active.png")
                  : require("../assets/pngIcon/ic_hash_tag_inactive.png")
              }
            ></Image>
            <Text
              style={{
                fontSize: 15,
                marginRight: 15,
                color: isPressed[idx] ? "white" : "black",
              }}
            >
              {" "}
              {tag}
            </Text>
          </HashTag>
        ))}
      </HashTagWrap>

      <Line></Line>

      {!searchResult.includes(true) ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={{ fontSize: 16, color: "#999999", textAlign: "center" }}>
            해시태그를 통한 검색이 가능해요!
          </Text>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginLeft: 30,
              marginBottom: 10,
            }}
          >
            {selectedTag.length != 0
              ? selectedTag.toString()
              : searchTitle.toString()}{" "}
            에 해당하는 명상 리스트
          </Text>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {data.map((m, idx) =>
                searchResult[idx] ? (
                  <SearchList key={idx} data={m} tag={selectedTag}></SearchList>
                ) : null
              )}
            </View>
          </ScrollView>
        </View>
      )}
    </SearchView>
  );
};
/* style */
const SearchView = styled.View`
  background-color: #f9faff;
  width: 100%;
  height: 100%;
`;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${statusBarHeight + 54}px;
`;

const HeaderText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin-top: ${statusBarHeight}px;
  margin-left: 25px;
`;

const SearchBarWrap = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SearchIcon = styled.Image`
  position: absolute;
  left: 50px;
  z-index: 2;
`;

const SearchBar = styled.TextInput`
  width: ${windowWidth - 50}px;
  height: 44px;
  border: 0.5px solid #f2f2f2;
  border-radius: 25px;
  padding-left: 50px;
  background-color: white;
`;

const HashTagWrap = styled.View`
  width: ${windowWidth - 72}px;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 15px;
  margin-left: 36px;
`;

const HashTag = styled.TouchableOpacity`
  height: 37px;
  flex-direction: row;
  align-items: center;
  border: 0.5px solid #f2f2f2;
  border-radius: 25px;
  margin-bottom: 15px;
  margin-right: 15px;
  shadow-color: black;
  shadow-offset: 0px 1px;
  shadow-radius: 5px;
  shadow-opacity: 0.1;
  elevation: 5;
`;

const Line = styled.View`
  width: ${windowWidth}px;
  border: 0.5px solid white;
  shadow-color: black;
  shadow-offset: 0px 2px;
  shadow-radius: 3px;
  shadow-opacity: 0.15;
  elevation: 3;
`;
export default Search;
