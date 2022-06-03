import * as React from "react";
import Svg, { Rect, Ellipse } from "react-native-svg";

function ToggleInactive(props) {
  return (
    <Svg
      width={51}
      height={28}
      viewBox="0 0 51 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect
        width={51}
        height={28}
        rx={14}
        transform="matrix(1 0 0 -1 0 28)"
        fill="#D9D9D9"
      />
      <Ellipse cx={13.8103} cy={14} rx={12.3103} ry={12.25} fill="#fff" />
    </Svg>
  );
}

export default ToggleInactive;
