function ApiService() {
  
    const API = {
      getMeditationList: () => {
        return meditations;
      },
      setMeditationList:(isLike)=>{
        //this.meditations.list.isLike=val;
        meditations.list.isLike=isLike;
      },
      getLikeList: () => {
        return likeMeditations;
      },
      getMyList: () => {
        return myMeditations;
      },
      getHomeTopList: () => {
        return homeTopMeditations;
      },
      getTrendList: () => {
        return trendMeditations;
      },
      getRecentList: () => {
        return recentMeditations;
      }
      
    };
  
    const meditations = {
      list: [
        {
          id: 1,
          name: "보라색 밤하늘",
          tag: ["휴식", "ASMR"],
          path: require("../assets/pngImage/img_cover1.png"),
          likeNum: 3753,
          isLike: false,
          detail: "당신의 편안한 휴식을 도와줍니다.\n명상과 함께 보라색의 아름다운 밤하늘을 여행하세요."
        },
        {
          id: 2,
          name: "바다 위를 걷는 기분",
          tag: ["안정", "여행"],
          path: require("../assets/pngImage/img_cover7.png"),
          likeNum: 118,
          isLike: false,
          detail: "바다 위를 걷는 기분.\n명상 설명"
        },
        {
          id: 3,
          name: "파리의 밤",
          tag: ["잔잔한", "ASMR", "여행"],
          path: require("../assets/pngImage/img_cover4.png"),
          likeNum: 1901,
          isLike: false,
          detail: "파리의 밤.\n명상 설명"
        },
        {
          id: 4,
          name: "거품과 함께 사라지다",
          tag: ["휴식", "잔잔함", "치유"],
          path: require("../assets/pngImage/img_cover2.png"),
          likeNum: 3753,
          isLike: true,
          detail: "오늘 하루 고생한 당신.\n거품과 함께 스트레스를 날려보내세요."
        },
        {
          id: 5,
          name: "혼자라고 생각말기",
          tag: ["휴식", "안정"],
          path: require("../assets/pngImage/img_cover3.png"),
          likeNum: 283,
          isLike: true,
          detail: "바쁜 일과를 마치고 집으로 돌아온 당신.\n혼자만이 느낄 수 있는 휴식을 안겨드릴게요."
        },
        {
          id: 6,
          name: "더 자유로워지기",
          tag: ["잔잔함", "치유"],
          path: require("../assets/pngImage/img_cover6.png"),
          likeNum: 1632,
          isLike: true,
          detail: "지금 이 순간만큼은 자유롭게."
        },
        {
          id: 7,
          name: "잠자리 이야기",
          tag: ["ASMR", "수면"],
          path: require("../assets/pngImage/img_cover5.png"),
          likeNum: 89,
          isLike: false,
          detail: "잠자리 이야기.\n명상 설명"
        },
      ],
    };
  
    const likeMeditations = {
      list: [
        {
          id: 1,
          name: "보라색 밤하늘",
          tag: ["휴식", "ASMR"],
          path: require("../assets/pngImage/img_cover1.png"),
          likeNum: 3753,
          detail: "당신의 편안한 휴식을 도와줍니다.\n명상과 함께 보라색의 아름다운 밤하늘을 여행하세요."
        },
        {
          id: 4,
          name: "거품과 함께 사라지다",
          tag: ["휴식", "잔잔함", "치유"],
          path: require("../assets/pngImage/img_cover2.png"),
          likeNum: 3753,
          detail: "오늘 하루 고생한 당신.\n거품과 함께 스트레스를 날려보내세요."
        },
        {
          id: 5,
          name: "혼자라고 생각말기",
          tag: ["휴식", "안정"],
          path: require("../assets/pngImage/img_cover3.png"),
          likeNum: 283,
          detail: "바쁜 일과를 마치고 집으로 돌아온 당신.\n혼자만이 느낄 수 있는 휴식을 안겨드릴게요."
        },
        {
          id: 6,
          name: "더 자유로워지기",
          tag: ["잔잔함", "치유"],
          path: require("../assets/pngImage/img_cover6.png"),
          likeNum: 1632,
          detail: "지금 이 순간만큼은 자유롭게."
        },
      
      ],
    };
  
    const myMeditations = {
      list: [
        {
          id: 1,
          name: "보라색 밤하늘",
          tag: ["휴식", "ASMR"],
          path: require("../assets/pngImage/img_cover1.png"),
          likeNum: 3753,
          isAlarm: true,
          time: "07:50",
        },
        {
          id: 7,
          name: "잠자리 이야기",
          tag: ["ASMR", "수면"],
          path: require("../assets/pngImage/img_cover5.png"),
          likeNum: 89,
          isAlarm: true,
          time: "13:30",
        },
        {
          id: 4,
          name: "거품과 함께 사라지다",
          tag: ["휴식", "잔잔함", "치유"],
          path: require("../assets/pngImage/img_cover2.png"),
          likeNum: 3753,
          isAlarm: true,
          time: "22:52",
        },
        
      ],
    };
  
    const homeTopMeditations = {
      list: [
        {
          id: 1,
          name: "보라색 밤하늘",
          tag: ["휴식", "ASMR"],
          path: require("../assets/pngImage/img_cover1.png"),
          likeNum: 3753,
        },
        {
          id: 5,
          name: "혼자라고 생각말기",
          tag: ["휴식", "안정"],
          path: require("../assets/pngImage/img_cover3.png"),
          likeNum: 283,
        },
        {
          id: 4,
          name: "거품과 함께 사라지다",
          tag: ["휴식", "잔잔함", "치유"],
          path: require("../assets/pngImage/img_cover2.png"),
          likeNum: 3753,
        },
      ],
    };
  
    const trendMeditations = {
      list: [
        {
          id: 4,
          name: "거품과 함께 사라지다",
          tag: ["휴식", "잔잔함", "치유"],
          path: require("../assets/pngImage/img_cover2.png"),
          likeNum: 3753,
          isLike: true,
        },
        {
          id: 5,
          name: "혼자라고 생각말기",
          tag: ["휴식", "안정"],
          path: require("../assets/pngImage/img_cover3.png"),
          likeNum: 283,
          isLike: true,
        },
        {
          id: 6,
          name: "더 자유로워지기",
          tag: ["잔잔함", "치유"],
          path: require("../assets/pngImage/img_cover6.png"),
          likeNum: 1632,
          isLike: true,
        },
        {
          id: 7,
          name: "잠자리 이야기",
          tag: ["ASMR", "수면"],
          path: require("../assets/pngImage/img_cover5.png"),
          likeNum: 89,
          isLike: false,
        },
      ],
    };

    const recentMeditations = {
      list: [
        {
          id: 5,
          name: "혼자라고 생각말기",
          tag: ["휴식", "안정"],
          path: require("../assets/pngImage/img_cover3.png"),
          likeNum: 283,
        },
        {
          id: 1,
          name: "보라색 밤하늘",
          tag: ["휴식", "ASMR"],
          path: require("../assets/pngImage/img_cover1.png"),
          likeNum: 3753,
        },
        {
          id: 3,
          name: "파리의 밤",
          tag: ["잔잔한", "ASMR", "여행"],
          path: require("../assets/pngImage/img_cover4.png"),
          likeNum: 1901,
          isLike: false,
          detail: "파리의 밤.\n명상 설명"
        },
        {
          id: 4,
          name: "거품과 함께 사라지다",
          tag: ["휴식", "잔잔함", "치유"],
          path: require("../assets/pngImage/img_cover2.png"),
          likeNum: 3753,
          isLike: true,
        },
      ],
    };
  
    return API;
  }
  
  export default ApiService;
