import * as React from "react";
import Svg, { Path } from "react-native-svg";

function PlayIc(props) {
  return (
    <Svg
      width={25}
      height={28}
      viewBox="0 0 25 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M24.156 12.316L2.406.233A1.727 1.727 0 001.555 0C.703 0 .008.656.008 1.458H0v25.084h.008C.008 27.344.703 28 1.555 28c.32 0 .586-.102.875-.248l21.726-12.068A2.131 2.131 0 0025 14c0-.678-.328-1.276-.844-1.684z"
        fill="#1A1A1A"
      />
    </Svg>
  );
}

export default PlayIc;
