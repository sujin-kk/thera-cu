import * as React from "react";
import Svg, { Path } from "react-native-svg";

function MyPageActive(props) {
  return (
    <Svg
      width={21}
      height={20}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.004 5.747C4.004 2.573 6.692 0 10.009 0c3.317 0 6.006 2.573 6.006 5.747 0 3.173-2.69 5.746-6.006 5.746-3.317 0-6.005-2.573-6.005-5.746zM3.429 14.273c1.628-.652 3.8-.864 6.58-.864 2.777 0 4.945.21 6.572.86 1.745.697 2.817 1.88 3.388 3.602.212.64-.29 1.284-.984 1.284H1.028c-.69 0-1.19-.642-.98-1.278.57-1.721 1.638-2.905 3.38-3.604z"
        fill="#614692"
      />
    </Svg>
  );
}

export default MyPageActive;
