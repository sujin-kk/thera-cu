import * as React from "react";
import Svg, { Path } from "react-native-svg";

function PlayNextIc(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M0 10l8-5-8-5v10zM12 0H9v10h3V0z" fill="#000" />
    </Svg>
  );
}

export default PlayNextIc;
