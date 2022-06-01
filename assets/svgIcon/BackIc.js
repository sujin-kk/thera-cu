import * as React from "react";
import Svg, { Path } from "react-native-svg";

function BackIc(props) {
  return (
    <Svg
      width={10}
      height={20}
      viewBox="0 0 17 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15 29h0c.025 0 .05-.007.07-.021l.555.832-.555-.832a.126.126 0 00.019-.193h0L2.01 15.706 1.303 15l.707-.707L15.088 1.215s0 0 0 0a.124.124 0 00.037-.09.126.126 0 00-.037-.088l.707-.707-.707.707a.126.126 0 00-.04-.027l.382-.924-.382.924a.126.126 0 00-.137.027h0L1.037 14.912a.125.125 0 000 .177h0M14.999 29L.33 15.796l.708-.707M14.999 29a.126.126 0 01-.088-.037m.088.037l-.088-.037M1.037 15.09L14.91 28.963M1.037 15.09L14.91 28.963m0 0h0m0 0h0"
        fill="#000"
        stroke="#333"
        strokeWidth={2}
      />
    </Svg>
  );
}

export default BackIc;
