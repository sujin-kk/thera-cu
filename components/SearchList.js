import React from "react";
import styled from "styled-components/native";
import {
  View,
  Text,
  Image,
  Dimensions,
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const windowWidth = Dimensions.get('window').width;
const SearchList = ({ data }) => {
  
  const hash = data.tag

  return (

      <Card style={{width:wp(35),height:wp(50),marginLeft:wp(10)}}>
        <Image source={data.path} style={{width: wp(35), height:wp(32), borderRadius:7 }}></Image>
        <Image source={require('../assets/pngIcon/ic_play.png')} style={{ position: "absolute", right: 10, top: 100 }}></Image>
        <Text style={{ color:"#333333",fontSize: 13, marginLeft: 5, marginTop: 5 }}>{data.name}</Text>
        <View style={{ flexDirection: 'row', marginLeft: 5, flexWrap: "wrap", overflow: "hidden" }}>
          {hash.map(mtag => (
            <CardHash key={mtag}>
              <Text style={{ fontSize: 9, textAlign: "center", marginLeft: 7, marginRight: 7 }}># {mtag}</Text>
            </CardHash>
          ))}
        </View>
      </Card>
      

  )

}

const Card = styled.View`
  background-color: #FFF;
  border-radius: 7px;
  margin-bottom: 30px; 
  shadow-color: black;
  shadow-offset: 0px 4px;
  shadow-radius: 4px;
  shadow-opacity: 0.2;
  elevation: 2;
`;

const CardHash = styled.View`
  border-radius: 30px;
  background-color: rgba(196, 196, 196, 0.25);
  margin-top: 5px;
  margin-right: 10px;
  align-items: center;
  flex-direction: row ;
  padding: 2px;
`;
export default SearchList;