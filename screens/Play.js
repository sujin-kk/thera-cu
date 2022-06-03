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
import WhiteBtn from "../components/WhiteBtn";
import shadow from "../theme/shadow";
import Slider from "react-native-slider";
import LikeGray from "../assets/svgIcon/LikeGray";
import PauseIc from "../assets/svgIcon/PauseIc";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Modal from "react-native-modal";
import PurpleBtn from "../components/PurpleBtn";

const Play = (props) => {
  const data = ApiService().getMeditationList().list;
  const meditation = data.filter(
    (medi) => medi.id === props.route.params.id
  )[0];

  const [isLike, setIsLike] = useState(meditation.isLike);
  const [likeNum, setLikeNum] = useState(meditation.likeNum);
  const [isPlay, setIsPlay] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

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
          marginTop: 50,
          width: wp(65),
          height: wp(65),
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
          onPress={openModal}
        >
          <WhiteBtn name={"리스트 추가"} />
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

      <Modal isVisible={isModalVisible} onBackdropPress={closeModal}>
        <GlobalStyled.ViewCol
          style={{
            width: wp(80),
            height: hp(28),
            backgroundColor: color.BACKGROUND,
            borderRadius: 30,
            alignSelf: "center",
            justifyContent: "flex-start",
            paddingHorizontal: 15,
          }}
        >
          <GlobalStyled.ViewRow style={{ flex: 3 }}></GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow
            style={{
              flex: 1,
              justifyContent: "flex-end",
              marginBottom: 12,
            }}
          >
            <TouchableOpacity
              style={{ width: 70, ...shadow.middle, marginEnd: 12 }}
              onPress={closeModal}
            >
              <WhiteBtn name={"취소"} />
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 70, ...shadow.middle }}>
              <PurpleBtn name={"저장"} />
            </TouchableOpacity>
          </GlobalStyled.ViewRow>
        </GlobalStyled.ViewCol>
      </Modal>
    </GlobalStyled.ViewCol>
  );
};

export default Play;
