import React, { useEffect, useState } from "react";
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
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import BackHeader from "../components/BackHeader";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { singUp } from "../lib/auth";

const SignUp = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('-');
  const [phoneNumber, setPhoneNumber] = useState('');



  const failedMessages = {
    "auth/email-already-in-use": "이미 가입된 이메일입니다.",
    "auth/invalid-email": "유효하지 않은 이메일 주소입니다.",
  }
  const signUp = async() => {
    const info = {id, pw};
    try{
      if(pw == confirmPw){
        const {user} = await singUp(info);
        console.log(user);
        navigation.navigate("Login");
      }
      else Alert.alert("입력정보를 확인해주세요.");
    }catch(e){
      console.log(e);
      const alertMessage = failedMessages[e.code];
      Alert.alert("회원가입 실패", alertMessage);
    }
  }

  console.log(confirmPw)
  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: '#F9FAFF', alignItems: 'center' }}>
      <BackHeader screen={"signin"}></BackHeader>
      <View style={{ width: "100%", borderColor: 'white', borderWidth: 0.5, borderStyle: "solid", shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 4, shadowOpacity: 0.25, elevation: 3 }}></View>
      <View style={{ width: wp(80), height: hp(75), marginTop: 30 }}>
        
        <Text style={{ fontSize: 17, alignSelf: 'flex-start', marginBottom: 10 }}>이름</Text>
        <TextInput
          onChangeText={(text) => setName(text)}
          style={{ height: 30, borderBottomWidth: 1, borderBottomColor: '#C4C4C4', marginBottom: 40 }}></TextInput>
        
        <Text style={{ fontSize: 17, alignSelf: 'flex-start', marginBottom: 10 }}>아이디</Text>
        <TextInput
          onChangeText={(text) => setId(text)}
          placeholder="이메일 형식으로 입력"
          style={{ height: 30, borderBottomWidth: 1, borderBottomColor: '#C4C4C4', marginBottom: 40 }}></TextInput>
        
        <Text style={{ fontSize: 17, alignSelf: 'flex-start', marginBottom: 10 }}>비밀번호</Text>
        <TextInput
          onChangeText={(text) => setPw(text)}
          secureTextEntry={true}
          placeholder="6자리 이상의 영문+숫자 조합으로 입력"
          style={{ height: 30, borderBottomWidth: 1, borderBottomColor: '#C4C4C4', marginBottom: 40 }}></TextInput>
        
        <Text style={{ fontSize: 17, alignSelf: 'flex-start', marginBottom: 10 }}>비밀번호 확인</Text>
        <TextInput
          onChangeText={(text) => {setConfirmPw(text)}}
          secureTextEntry={true}
          style={{ height: 30, borderBottomWidth: 1, borderBottomColor: '#C4C4C4', marginBottom: 5 }}></TextInput>
        {pw !== confirmPw ? 
        (<Text style={{color: 'red', marginBottom: 40}}>비밀번호가 일치하지 않습니다.</Text>)
        : (<Text style={{color: 'green', marginBottom: 40}}>비밀번호가 일치합니다.</Text>)}

        <Text style={{ fontSize: 17, alignSelf: 'flex-start', marginBottom: 10 }}>휴대폰 번호</Text>
        <TextInput
          onChangeText={(text) => setPhoneNumber(text)}
          placeholder="'-'구분없이 입력"
          style={{ height: 30, borderBottomWidth: 1, borderBottomColor: '#C4C4C4' }}></TextInput>
        <TouchableOpacity
          onPress={signUp}
          style={{ backgroundColor: '#614692', height: 52, borderRadius: 25, justifyContent: 'center', marginTop: 50}}>
          <Text style={{ fontSize: 17, fontWeight: '700', color: 'white', textAlign: 'center' }}>테라쿠 시작하기</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default SignUp;
