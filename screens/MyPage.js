import React from "react";
import {
  Dimensions,
  Platform,
  StatusBar,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import styled from "styled-components/native";

const statusBarHeight =
  Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight;
const windowWidth = Dimensions.get('window').width;

const MyPage = () => {
  return (
    <MyPageView>
      <HeaderText>내 정보</HeaderText>
    </MyPageView>
  );
};

const MyPageView = styled.View`
  background-color: #F9FAFF;
  width: 100%;
  height: 100%; 
`;

const HeaderText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color:black;
  marginTop: ${statusBarHeight+15}px;
  marginLeft: 25px;
`;

export default MyPage;
