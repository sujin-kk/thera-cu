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
import { Picker } from "@react-native-picker/picker";

const Play = (props) => {
  const data = ApiService().getMeditationList().list;
  const meditation = data.filter(
    (medi) => medi.id === props.route.params.id
  )[0];

  const [isLike, setIsLike] = useState(meditation.isLike);
  const [likeNum, setLikeNum] = useState(meditation.likeNum);
  const [isPlay, setIsPlay] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedHour, setSelectedHour] = useState("09");
  const [selectedMin, setSelectedMin] = useState("30");
  const [selectedDay, setSelectedDay] = useState("오전");

  const day = ["오전", "오후"];
  const hour = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const minute = ["00", "10", "20", "30", "40", "50"];

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const saveMyList = () => {
    closeModal();
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
          return <TagButton id={name} name={name} type={"default"} />;
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
          <GlobalStyled.ViewRow style={{ flex: 3 }}>
            <Picker
              style={{ flex: 1 }}
              itemStyle={{ fontSize: 14 }}
              selectedValue={selectedDay}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedDay(itemValue)
              }
            >
              {day.map((d) => {
                return <Picker.Item key={d} label={d} value={d} />;
              })}
            </Picker>
            <Picker
              style={{ flex: 1 }}
              itemStyle={{ fontSize: 14 }}
              selectedValue={selectedHour}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedHour(itemValue)
              }
            >
              {hour.map((h) => {
                return <Picker.Item key={h} label={h} value={h} />;
              })}
            </Picker>
            <Picker
              style={{ flex: 1 }}
              itemStyle={{ fontSize: 14 }}
              selectedValue={selectedMin}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedMin(itemValue)
              }
            >
              {minute.map((m) => {
                return <Picker.Item key={m} label={m} value={m} />;
              })}
            </Picker>
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow
            style={{
              flex: 1,
              justifyContent: "flex-end",
              marginBottom: 12,
            }}
          >
            <TouchableOpacity
              style={{ width: 70, ...shadow.low, marginEnd: 12 }}
              onPress={closeModal}
            >
              <WhiteBtn name={"취소"} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ width: 70, ...shadow.low }}
              onPress={saveMyList}
            >
              <PurpleBtn name={"저장"} />
            </TouchableOpacity>
          </GlobalStyled.ViewRow>
        </GlobalStyled.ViewCol>
      </Modal>
    </GlobalStyled.ViewCol>
  );
};

export default Play;
