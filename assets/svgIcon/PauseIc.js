import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function PauseIc(props) {
  return (
    <Svg
      width={16}
      height={28}
      viewBox="0 0 16 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 0C3.88 0 5 1.045 5 2.333v23.334C5 26.955 3.88 28 2.5 28S0 26.955 0 25.667V2.333C0 1.045 1.12 0 2.5 0zM13.5 0C14.88 0 16 1.045 16 2.333v23.334C16 26.955 14.88 28 13.5 28S11 26.955 11 25.667V2.333C11 1.045 12.12 0 13.5 0z"
        fill="#000"
      />
    </Svg>
  );
}

export default PauseIc;
