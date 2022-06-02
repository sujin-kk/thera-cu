import * as React from "react";
import Svg, { Path } from "react-native-svg";

function PlayPrevIc(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 10L4 5l8-5v10zM0 0h3v10H0V0z" fill="#000" />
    </Svg>
  );
}

export default PlayPrevIc;
