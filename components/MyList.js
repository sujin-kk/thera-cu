import React, {Component} from 'react';
import { FlatList, View, Text} from "react-native";

import MyImage from "./MyImage";

export default MyList = ({ title, data }) => {
  const renderItem = ({ item }) => {
    var hour = item.time.charAt(0)+item.time.charAt(1)
    var time = item.time.charAt(3)+item.time.charAt(4)
    return (
      <View
        style={{
          flexDirection: "column",
          alignItems:"center",
          position:"absolute",
          marginTop:15,
          width: "100%",

        }}
      >
        <MyImage style={{}} path={item.path} />

        <Text style={{ 
          position: "absolute",
          top:30,
          left:140,
          fontSize: 17,
          fontWeight: "400",
          color:"black",
          }}>{item.name}</Text>

        <Text style={{ 
          position: "absolute",
          bottom:30,
          left:140,
          fontSize: 20,
          fontWeight: "400",
          color:"black",
        }}>{(()=>{
            if(hour>=12) return "오후";
            else return "오전";
        })()}</Text>

        <Text style={{ 
          position: "absolute",
          bottom:28,
          left:185,
          fontSize: 25,
          fontWeight: "500",
          letterSpacing:4,
          color:"black",
        }}>{(()=>{
            if(hour>=12) return hour-12+":"+time;
            else return item.time;
        })()}</Text>

        
        
      </View>
    );
  };

  const HSeperator = () => {
    return <View style={{ height:135}}>
      
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
