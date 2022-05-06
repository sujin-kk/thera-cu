import * as React from "react";
import Svg, { Path } from "react-native-svg";
import color from "../../theme/color";

function SearchActive(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22.021 20.606l-4.996-4.996a9.026 9.026 0 10-1.414 1.414l4.996 4.996a.999.999 0 001.716-.704 1.001 1.001 0 00-.302-.71zM3 10a7 7 0 117 7 7.008 7.008 0 01-7-7z"
        fill={color.MAIN_PURPLE}
      />
    </Svg>
  );
}

export default SearchActive;
