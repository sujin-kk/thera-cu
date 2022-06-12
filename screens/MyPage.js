import React from "react";
import {
  Dimensions,
  Platform,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import ApiService from "../util/ApiService";
import MyPageList from "../components/MyPageList";
import { getStatusBarHeight } from "react-native-status-bar-height";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Like from "./Like";
import Statistics from "./Statistics";

const statusBarHeight =
  Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight;
const windowWidth = Dimensions.get('window').width;

const MyPage = () => {
  const navigation = useNavigation();
  const recentData = ApiService().getRecentList().list;
  
  return (
    <MyPageView>
      <HeaderText>내 정보</HeaderText>

      <View style={{alignItems:"center", marginBottom: 20}}>
        <Image
          style={{
            //position:"absolute",
            marginTop:30
          }}
          source={require("../assets/pngImage/img_mypage_profile.png")}
        />
        <Text style={{marginTop:10, fontSize:18,fontWeight:"900"}}>테라쿠</Text>
        <Text style={{marginTop:15, fontSize:14,color:"#C4C4C4"}}>theracu@konkuk.ac.kr</Text>
        
        <TouchableOpacity
          onPress={() => navigation.navigate(Statistics)}
          style={{marginTop: 20, flexDirection:'row', width: '100%', alignItems:'center',justifyContent:'center'}}>
            <View style={{marginRight: 45}}>
              <Text style={{fontSize:12}}>명상 시간</Text>
              <Text style={{fontWeight: '600', fontSize: 14, marginTop: 20}}>37 시간</Text>
            </View>
            <View style={{width:0, height:66, borderColor: '#D9D9D9', borderWidth: 1, borderStyle: 'solid'}}>
            </View>
            <View style={{marginLeft: 45}}>
              <Text style={{fontSize: 12}}>명상 순위</Text>
              <Text style={{fontWeight: '600',fontSize: 14, marginTop: 20}}>1852위</Text>
            </View>
            
        </TouchableOpacity>

        <Image
          style={{
            marginTop:15,
            width:"100%",
            height:1.5,
          }}
          source={require("../assets/pngImage/img_mypage_line.png")}
        />
      </View>
      
      <MyPageList title="최근 활동" data={recentData}/>

      <View style={{width:"100%",height:35,marginTop:15,marginLeft:20,diplay:"flex",flexDirection:"row"}}>
        <Image
          style={{
            resizeMode:"contain",
            width:27,
            height:22,
            top:2,
          }}
          source={require("../assets/pngImage/ic_like_active.png")}
        />
        <Text style={{fontSize:17,fontWeight:"800",top:1,left:12,color:"black"}}>좋아요 표시한 명상</Text>
        <TouchableOpacity onPress={() => navigation.navigate(Like)}>
          <Image
            style={{
              resizeMode:"contain",
              width:25,
              height:18,
              top:4,
              left:wp(46),
            }}
            source={require("../assets/pngImage/ic_goto_list.png")}
          />
        </TouchableOpacity>
        
      </View>

      <View style={{width:"100%",height:35,marginLeft:20,marginTop:10,diplay:"flex",flexDirection:"row"}}>
        <Image
          style={{
            resizeMode:"contain",
            width:30,
            height:25,
          
          }}
          source={require("../assets/pngImage/ic_list.png")}
        />
        <Text style={{fontSize:17,fontWeight:"800",top:2,left:12,color:"black"}}>나의 명상 리스트</Text>
        <TouchableOpacity onPress={() => navigation.navigate(Like)}>
          <Image
            style={{
              resizeMode:"contain",
              width:25,
              height:18,
              top:4,
              left:wp(49),
            }}
            source={require("../assets/pngImage/ic_goto_list.png")}
          />
        </TouchableOpacity>
      </View>
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
