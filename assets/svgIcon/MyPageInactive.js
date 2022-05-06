import * as React from "react";
import Svg, { Path } from "react-native-svg";
import color from "../../theme/color";

function MyPageInactive(props) {
  return (
    <Svg
      width={23}
      height={22}
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        transform="translate(1.514 1)"
        fill="#F9FAFF"
        d="M0 0H20V19.1529H0z"
      />
      <Path
        d="M17.07 6.32c0 2.939-2.488 5.32-5.556 5.32-3.069 0-5.556-2.381-5.556-5.32C5.958 3.382 8.445 1 11.514 1c3.068 0 5.555 2.382 5.555 5.32z"
        stroke={color.GRAY_300}
        strokeWidth={2}
      />
      <Path
        d="M1.514 20.153c1.063-3.273 3.8-4.256 10-4.256s8.936.983 10 4.256"
        stroke={color.GRAY_300}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default MyPageInactive;
