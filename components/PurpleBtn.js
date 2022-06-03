import React from "react";
import color from "../theme/color";
import GlobalStyled from "../theme/GlobalStyled";
import { Text } from "react-native";

const PurpleBtn = (props) => {
  return (
    <GlobalStyled.ViewRow
      style={{
        width: "auto",
        height: 36,
        backgroundColor: color.MAIN_PURPLE,
        borderRadius: 30,
        paddingHorizontal: 8,
      }}
    >
      <Text
        style={{
          marginHorizontal: 8,
          fontSize: 12,
          color: color.WHITE,
          fontWeight: "bold",
        }}
      >
        {props.name}
      </Text>
    </GlobalStyled.ViewRow>
  );
};

export default PurpleBtn;
