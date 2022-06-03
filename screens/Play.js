import React, { useState, useEffect } from "react";
import color from "../theme/color";
import GlobalStyled from "../theme/GlobalStyled";
import BackHeader from "../components/BackHeader";
import ApiService from "../util/ApiService";
import { Image, Text, TouchableOpacity } from "react-native";
import PlayPrevIc from "../assets/svgIcon/PlayPrevIc";
import PlayNextIc from "../assets/svgIcon/PlayNextIc";
import PlayIc from "../assets/svgIcon/PlayIc";
import TagButton from "../components/TagButton";
import LikeActive from "../assets/svgIcon/LikeActive";
import WhtieBtn from "../components/WhiteBtn";
import shadow from "../theme/shadow";
import Slider from "react-native-slider";
import LikeGray from "../assets/svgIcon/LikeGray";
import PauseIc from "../assets/svgIcon/PauseIc";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Play = (props) => {
  const data = ApiService().getMeditationList().list;
  const meditation = data.filter(
    (medi) => medi.id === props.route.params.id
  )[0];

  const [isLike, setIsLike] = useState(meditation.isLike);
  const [likeNum, setLikeNum] = useState(meditation.likeNum);
  const [isPlay, setIsPlay] = useState(false);

  return (
    <GlobalStyled.ViewCol
      style={{
        backgroundColor: color.BACKGROUND,
        justifyContent: "flex-start",
      }}
    >
      <BackHeader />
      <Image
        style={{
          marginTop: 30,
          width: wp(60),
          height: wp(60),
          borderRadius: 10,
        }}
        source={meditation.path}
      />
      <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 25 }}>
        {meditation.name}
      </Text>

      <GlobalStyled.ViewRow
        style={{
          height: "auto",
          width: "auto",
          justifyContent: "space-around",
          marginTop: 10,
        }}
      >
        {meditation.tag.map((name) => {
          return <TagButton id={name} name={name} />;
        })}
      </GlobalStyled.ViewRow>

      <GlobalStyled.ViewRow
        style={{
          width: "55%",
          height: "auto",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <GlobalStyled.ViewRow style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => {
              isLike ? setLikeNum(likeNum - 1) : setLikeNum(likeNum + 1);
              setIsLike(!isLike);
            }}
          >
            {isLike ? (
              <LikeActive width={28} height={25} />
            ) : (
              <LikeGray width={28} height={25} />
            )}
          </TouchableOpacity>
          <Text style={{ color: color.MAIN_PURPLE, marginStart: 8 }}>
            + {likeNum}
          </Text>
        </GlobalStyled.ViewRow>

        <GlobalStyled.ViewRow
          style={{
            flex: 1,
            ...shadow.low,
          }}
          as={TouchableOpacity}
        >
          <WhtieBtn name={"리스트 추가"} />
        </GlobalStyled.ViewRow>
      </GlobalStyled.ViewRow>

      <GlobalStyled.ViewRow
        style={{
          width: "55%",
          height: "auto",
          justifyContent: "space-between",
          marginTop: 50,
        }}
      >
        <TouchableOpacity>
          <PlayPrevIc />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setIsPlay(!isPlay);
          }}
        >
          {isPlay ? <PauseIc /> : <PlayIc />}
        </TouchableOpacity>

        <TouchableOpacity>
          <PlayNextIc />
        </TouchableOpacity>
      </GlobalStyled.ViewRow>

      <Slider
        style={{
          height: "auto",
          width: "80%",
          marginTop: 30,
          transform: [{ scaleY: 0.6 }],
        }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor={color.MAIN_PURPLE}
        maximumTrackTintColor={color.GRAY_200}
        thumbTintColor={color.SUB_PURPLE}
        thumbStyle={{ width: 9, height: 14 }}
      />
    </GlobalStyled.ViewCol>
  );
};

export default Play;
