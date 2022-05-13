
let getMeditationList = () => {
    return meditations;
};

let getLikeList = () => {
    return likeMeditations;
}

let getMyList = () => {
    return myMeditations;
}

let meditations = {
    "list": [
        {
            "id": 1,
            "name": "보라색 밤하늘",
            "tag": ["휴식", "ASMR"],
            "image": "../assets/pngImage/img_cover1.png",
            "likeNum": 3753,
            "isLike": true,
        },
        {
            "id": 2,
            "name": "바다 위를 걷는 기분",
            "tag": ["안정", "여행"],
            "image": "../assets/pngImage/img_cover7.png",
            "likeNum": 118,
            "isLike": false,
        },
        {
            "id": 3,
            "name": "파리의 밤",
            "tag": ["잔잔한", "ASMR", "여행"],
            "image": "../assets/pngImage/img_cover4.png",
            "likeNum": 1901,
            "isLike": false,
        },
        {
            "id": 4,
            "name": "거품과 함께 사라지다",
            "tag": ["휴식", "잔잔함", "치유"],
            "image": "../assets/pngImage/img_cover2.png",
            "likeNum": 3753,
            "isLike": true,
        },
        {
            "id": 5,
            "name": "혼자라고 생각말기",
            "tag": ["휴식", "안정"],
            "image": "../assets/pngImage/img_cover3.png",
            "likeNum": 283,
            "isLike": true,
        },
        {
            "id": 6,
            "name": "더 자유로워지기",
            "tag": ["잔잔함", "치유"],
            "image": "../assets/pngImage/img_cover6.png",
            "likeNum": 1632,
            "isLike": true,
        },
        {
            "id": 7,
            "name": "잠자리 이야기",
            "tag": ["ASMR", "수면"],
            "image": "../assets/pngImage/img_cover5.png",
            "likeNum": 89,
            "isLike": false,
        },
    ]
};

let likeMeditations = {
    "list": [
        {
            "id": 1,
            "name": "보라색 밤하늘",
            "tag": ["휴식", "ASMR"],
            "image": "../assets/pngImage/img_cover1.png",
            "likeNum": 3753,
        },
        {
            "id": 4,
            "name": "거품과 함께 사라지다",
            "tag": ["휴식", "잔잔함", "치유"],
            "image": "../assets/pngImage/img_cover2.png",
            "likeNum": 3753,
        },
        {
            "id": 5,
            "name": "혼자라고 생각말기",
            "tag": ["휴식", "안정"],
            "image": "../assets/pngImage/img_cover3.png",
            "likeNum": 283,
        },
        {
            "id": 6,
            "name": "더 자유로워지기",
            "tag": ["잔잔함", "치유"],
            "image": "../assets/pngImage/img_cover6.png",
            "likeNum": 1632,
        },
    ]
};

let myMeditations = {
    "list": [
        {
            "id": 1,
            "name": "보라색 밤하늘",
            "tag": ["휴식", "ASMR"],
            "image": "../assets/pngImage/img_cover1.png",
            "likeNum": 3753,
            "time": "07:50"
        },
        {
            "id": 4,
            "name": "거품과 함께 사라지다",
            "tag": ["휴식", "잔잔함", "치유"],
            "image": "../assets/pngImage/img_cover2.png",
            "likeNum": 3753,
            "time": "19:52"
        },
    ]
};

export default getMeditationList;
export default getLikeList;
export default getMyList;
