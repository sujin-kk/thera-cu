import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import { singIn, singUp } from "../lib/auth";

const Login = () => {
  const navigation = useNavigation();
  const [id, setId] = useState();
  const [pw, setPw] = useState();


  const failedMessages = {
    "auth/wrong-password": "잘못된 비밀번호입니다.",
    "auth/user-not-found": "존재하지 않는 계정입니다.",
  }

  const signIn = async() => {
    const info = {id, pw};
    try{
      const user = await singIn(info);
      console.log(user);
    }catch(e){
      const alertMessage = failedMessages[e.code]
      Alert.alert("로그인 실패", alertMessage);
    }

    // navigation.navigate("MainStack", {
    //   screen: "MainTabs",
    // });
  };
  // const signUp = async() => {
  //   const info = {id, pw};
  //   try{
  //     const user = await singUp(info);
  //     console.log(user);
  //   }catch(e){

  //   }
  // }



  

  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: '#F9FAFF', alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('../assets/pngImage/img_logo.png')}></Image>
      <TextInput 
        onChangeText={(text) => setId(text)}
        placeholder="아이디"
        style={{ width: 263, height: 45, backgroundColor: 'white', borderColor: '#c4c4c4', borderRadius: 25, borderWidth: 0.7, borderWidth: 0.7, marginTop: 50, paddingLeft: 20}}>
      </TextInput>

      <TextInput 
        onChangeText={(text) => {setPw(text)}}
        placeholder="비밀번호"
        style={{ width: 263, height: 45, backgroundColor: 'white', borderColor: '#c4c4c4', borderRadius: 25, borderWidth: 0.7, borderWidth: 0.7, marginTop: 8, paddingLeft: 20}}>
      </TextInput>

      <TouchableOpacity 
        onPress={signIn}
        key={"로그인"}
        style={{ width: 263, height: 45, alignItems: "center", justifyContent: "center", marginTop: 30}}>
          <LinearGradient
            colors={["#B6CEFF", "#ECE4FF"]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={{ width: '100%', height: '100%', justifyContent: "center", alignItems: "center", borderRadius: 25}}>
            <Text style={{ color: '#614692', fontWeight: '700'}}>로그인</Text>
          </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity 
        key={"회원가입"}
        style={{ width: 263, height: 45, backgroundColor: 'white',borderColor: '#c4c4c4', borderRadius: 25, borderWidth: 0.7, borderWidth: 0.7, alignItems: "center", justifyContent: "center", marginTop: 10 }}>
          <Text style={{ color: '#614692', fontWeight: '600'}}>회원가입</Text>
      </TouchableOpacity>
    </View>
  );
};



export default Login;
