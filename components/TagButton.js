import React from "react";
import color from "../theme/color";
import GlobalStyled from "../theme/GlobalStyled";
import { Text } from "react-native";

const TagButton = (props) => {
  return props.type === "default" ? (
    <GlobalStyled.ViewRow
      style={{
        width: "auto",
        height: 32,
        backgroundColor: color.BTN_GRAY,
        borderRadius: 30,
        paddingHorizontal: 7,
        marginHorizontal: 5,
      }}
    >
      <Text style={{ marginHorizontal: 7, fontSize: 12 }}>#{props.name}</Text>
    </GlobalStyled.ViewRow>
  ) : (
    <GlobalStyled.ViewRow
      style={{
        width: "auto",
        height: 20,
        backgroundColor: color.BTN_GRAY,
        borderRadius: 30,
        paddingHorizontal: 7,
        marginEnd: 5,
      }}
    >
      <Text style={{ fontSize: 10 }}>#{props.name}</Text>
    </GlobalStyled.ViewRow>
  );
};

export default TagButton;
