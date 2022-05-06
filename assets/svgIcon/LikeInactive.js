import * as React from "react";
import Svg, { Path } from "react-native-svg";
import color from "../../theme/color";

function LikeInactive(props) {
  return (
    <Svg
      width={42}
      height={35}
      viewBox="0 0 42 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20.997 35L3.302 17.302A9.913 9.913 0 1117.303 3.304l3.694 3.694 3.694-3.694a9.914 9.914 0 1114.001 13.998l-4.164 4.163L20.998 35zM8.4 20.53l12.598 12.594L37.756 16.36a8.575 8.575 0 00.29-12.406 8.578 8.578 0 00-12.408.29l-4.64 4.622-4.631-4.63A8.576 8.576 0 002.22 13.57a8.578 8.578 0 002.03 2.784l4.149 4.175z"
        fill={color.GRAY_300}
      />
    </Svg>
  );
}

export default LikeInactive;
