import * as React from "react";
import Svg, { Path } from "react-native-svg";

function LikeInactive(props) {
  return (
    <Svg
      width={props.width ? props.width : 20}
      height={props.height ? props.height : 18}
      viewBox="0 0 22 20"
      fill={props.fill ? "#B3B3B3" : "none"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.782 18.806l.218.23.218-.23L17.662 12h0l1.977-2.088c.506-.479.913-1.06 1.198-1.709a5.535 5.535 0 00.11-4.168 5.316 5.316 0 00-1.113-1.782 5.008 5.008 0 00-1.694-1.176 4.8 4.8 0 00-3.981.117 5.048 5.048 0 00-1.623 1.267L11 4.083 9.464 2.46a5.048 5.048 0 00-1.623-1.267 4.8 4.8 0 00-3.981-.117 5.008 5.008 0 00-1.694 1.176 5.317 5.317 0 00-1.112 1.782 5.534 5.534 0 00.11 4.168c.284.649.691 1.23 1.197 1.71l8.421 8.893zm7.991-9.795h0l-.01.01-7.763 8.2-5.782-6.103v-.001L3.242 9.018l-.005-.005-.005-.005a4.01 4.01 0 01-.9-1.303 4.227 4.227 0 01-.07-3.168 4.04 4.04 0 01.842-1.346 3.775 3.775 0 011.268-.884 3.594 3.594 0 012.967.073c.465.224.883.546 1.229.947h0l.009.01 2.205 2.328.218.23.217-.23 2.21-2.324.006-.005.005-.006c.345-.4.763-.722 1.228-.946a3.595 3.595 0 012.967-.073c.474.2.906.5 1.268.884.363.383.65.84.841 1.346a4.23 4.23 0 01-.07 3.168c-.213.495-.52.938-.899 1.302z"
        fill="#B3B3B3"
        stroke="#B3B3B3"
      />
    </Svg>
  );
}

export default LikeInactive;
