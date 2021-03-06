import * as React from "react";
import Svg, { Path } from "react-native-svg";
import color from "../../theme/color";

function LikeGray(props) {
  return (
    <Svg
      width={props.width ? props.width : 20}
      height={props.height ? props.height : 18}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.911 0C3.6 0 2.36.555 1.45 1.516c-1.932 2.034-1.932 5.361 0 7.395l.947 1.035L10.05 17.6l7.253-7.21 1.057-.998C19.417 8.393 20 6.988 20 5.472a5.397 5.397 0 00-1.24-3.475C17.887.96 16.684.333 15.372.259a4.695 4.695 0 00-3.535 1.294l-1.53 1.442a.349.349 0 01-.511 0L8.374 1.516A4.63 4.63 0 004.91 0z"
        fill={color.GRAY_200}
      />
      <Path
        d="M4.911 0C3.6 0 2.36.555 1.45 1.516c-1.932 2.034-1.932 5.361 0 7.395l.947 1.035L10.05 17.6l7.253-7.21 1.057-.998C19.417 8.393 20 6.988 20 5.472a5.397 5.397 0 00-1.24-3.475C17.887.96 16.684.333 15.372.259a4.695 4.695 0 00-3.535 1.294l-1.53 1.442a.349.349 0 01-.511 0L8.374 1.516A4.63 4.63 0 004.91 0z"
        fill={color.GRAY_200}
      />
    </Svg>
  );
}

export default LikeGray;
