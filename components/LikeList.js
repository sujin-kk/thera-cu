import React, {Component} from 'react';
import { FlatList, View, Text} from "react-native";
import LikeImage from "./LikeImage";
import styled from "styled-components/native";

export default LikeList = ({ title, data }) => {
  const renderItem = ({ item }) => {
    
    const hashlist = item.tag.map((tag)=><CardHash style={{
      
    }} key={tag}>
    <Text style={{
      justifyContent:"flex-start",
      fontSize:11, 
      marginLeft:7, 
      marginRight:7,
    }}>{"#"+tag}</Text></CardHash>)

    return (
      <View
        style={{
          flexDirection: "column",
          position:"absolute",
          marginTop:15,
          width: "100%",
         
        }}
      >
        <LikeImage style={{}} path={item.path} />

        <Text style={{ 
          position: "absolute",
          top:20,
          left:130,
          fontSize: 17,
          fontWeight: "400",
          color:"black",
          }}>{item.name}</Text>

        <HashTagFrame style={{position:"absolute",flexDirection:"row"}}>{hashlist}</HashTagFrame>

        <Text style={{ 
          position: "absolute",
          top:70,
          left:130,
          fontSize: 10,
          fontWeight: "100",
          color:"black",
          }}>{item.detail}</Text>
      </View>
    );
  };

  const HSeperator = () => {
    return <View style={{ width:"100%",height:135}}>
      
    </View>;
    
  };

  return (
      <FlatList
        vertical
        persistentScrollbar={true}
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={HSeperator}
        ListFooterComponent={HSeperator}
        keyExtractor={(item) => item.id + ""}
      />
  );
};

const CardHash = styled.View`
border-radius: 30px;
background-color: rgba(196, 196, 196, 0.25);
padding: 2px;
margin-right:3px;
align-items: center;
left: 130px;
top:47px;
`;

const HashTagFrame = styled.View`

`;
 