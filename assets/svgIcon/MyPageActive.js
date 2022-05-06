import * as React from "react";
import Svg, { Path } from "react-native-svg";

function MyPageActive(props) {
  return (
    <Svg
      width={26}
      height={32}
      viewBox="0 0 26 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13 15a7 7 0 100-14 7 7 0 000 14zM25 31a12 12 0 00-24 0h24z"
        fill="#999"
        stroke="#999"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default MyPageActive;
