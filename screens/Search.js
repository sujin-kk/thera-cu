import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  Platform,
  StatusBar,
  TextInput
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import styled from "styled-components/native";
import SearchList from "../components/SearchList";
import ApiService from "../util/ApiService";

const statusBarHeight =
  Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight;
const windowWidth = Dimensions.get('window').width;
const hashTagList = ['수면', '안정', 'ASMR', '휴식', 'Theraphy', '여행', '치유', '직장인', '잔잔한']
const data = ApiService().getMeditationList().list;

const Search = () => {
  return (
    <SearchView>
      <Header>
        <HeaderText>검색</HeaderText>
      </Header>
      <SearchBarWrap>
        <SearchIcon source={require('../assets/pngIcon/ic_search_bar.png')} />
        <SearchBar
          placeholder='검색어를 입력하세요.'
          placeholderTextColor='#C4C4C4'>
        </SearchBar>
      </SearchBarWrap>
      <HashTagWrap>
        {hashTagList.map((tag) => (
          <HashTag key={tag}>
            <Image style={{ marginLeft: 15 }} source={require('../assets/pngIcon/ic_hash_tag_inactive.png')}></Image>
            <Text style={{ fontSize: 15, marginRight: 15 }}>{tag}</Text>
          </HashTag>
        ))}
      </HashTagWrap>
      <Line></Line>
      <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 25, marginBottom: 10 }}> 휴식  ASMR 에 해당하는 명상 리스트</Text>
      <ScrollView contentContainerStyle={{ }} style={{flex:1, width: '100%'}}>
        <View style={{ flexDirection: 'row', flexWrap:'wrap'}}>
          {data.map(m=>(
          <SearchList data={m}></SearchList>
          ))}
        </View>
      </ScrollView>
    </SearchView>
  );
};
/* style */
const SearchView = styled.View`
  background-color: #F9FAFF;
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
  marginTop: ${statusBarHeight}px;
  marginLeft: 25px;
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
  z-index:2;
`;

const SearchBar = styled.TextInput`
  width: ${windowWidth - 50}px;
  height: 44px;
  border: 0.5px solid #F2F2F2;
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

const HashTag = styled.View`
  background-color: white;
  height: 37px;
  flex-direction:row;
  align-items: center;
  border: 0.5px solid #F2F2F2;
  border-radius: 25px;
  margin-bottom: 15px;
  margin-right: 15px;
  shadow-color: black;
  shadow-offset: 0px 1px;
  shadow-radius: 5px;
  shadow-opacity: 0.1;
`;

const Line = styled.View`
  width: ${windowWidth}px;
  border: 0.5px solid white;
  shadow-color: black;
  shadow-offset: 0px 2px;
  shadow-radius: 3px;
  shadow-opacity: 0.15;
`;
export default Search;