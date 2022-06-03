import * as React from "react";
import Svg, { Rect, Ellipse } from "react-native-svg";

function ToggleActive(props) {
  return (
    <Svg
      width={51}
      height={28}
      viewBox="0 0 51 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={51} height={28} rx={14} fill="#614692" />
      <Rect width={51} height={28} rx={14} fill="#614692" />
      <Rect width={51} height={28} rx={14} fill="#614692" />
      <Ellipse cx={36.8103} cy={14} rx={12.3103} ry={12.25} fill="#fff" />
    </Svg>
  );
}

export default ToggleActive;
