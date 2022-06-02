import React from "react";
import color from "../theme/color";
import GlobalStyled from "../theme/GlobalStyled";
import { Text } from "react-native";

const WhiteBtn = (props) => {
  return (
    <GlobalStyled.ViewRow
      style={{
        width: "auto",
        height: 36,
        backgroundColor: color.WHITE,
        borderRadius: 30,
        paddingHorizontal: 8,
      }}
    >
      <Text
        style={{
          marginHorizontal: 8,
          fontSize: 12,
          color: color.MAIN_PURPLE,
          fontWeight: "bold",
        }}
      >
        {props.name}
      </Text>
    </GlobalStyled.ViewRow>
  );
};

export default WhiteBtn;
