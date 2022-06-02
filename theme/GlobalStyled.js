import styled from "styled-components";

const parser = (value) => {
  if (typeof value === "string") {
    if (value.substring(value.length - 2, value.length) == "px") {
      return value;
    } else if (value.substring(value.length - 1, value.length) === "%") {
      return value;
    } else {
      return value + "px";
    }
  } else {
    return value + "px";
  }
};

const fontWeight = {
  Light: "100",
  Regular: "400",
  Medium: "500",
  Bold: "700",
};

const fontFamily = {
  Light: "NotoSansKR-Thin",
  Regular: "NotoSansKR-Regular",
  Medium: "NotoSansKR-Medium",
  Bold: "NotoSansKR-Bold",
};

const GlobalStyled = {
  ViewCol: styled.View`
    display: flex;
    flex-direction: column;
    width: ${(props) => (props.width ? parser(props.width) : "100%")};
    height: ${(props) => (props.height ? parser(props.height) : "100%")};
    justify-content: ${(props) =>
      props.justifyContent ? props.justifyContent : "center"};
    align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  `,
  ViewRow: styled.View`
    display: flex;
    flex-direction: row;
    width: ${(props) => (props.width ? parser(props.width) : "100%")};
    height: ${(props) => (props.height ? parser(props.height) : "100%")};
    justify-content: ${(props) =>
      props.justifyContent ? props.justifyContent : "center"};
    align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  `,

  WhiteSpace: styled.View`
    height: ${(props) => (props.height ? parser(props.height) : "10px")};
  `,
};

export default GlobalStyled;
