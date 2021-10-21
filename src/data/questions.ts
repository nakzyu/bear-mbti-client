import { Indicators, Question } from "../types";
export const Questions: Question[] = [
  {
    direction: "충동적으로 바디프로필을 예약해버렸을 때 나는",
    options: [
      {
        text: "촬영 컨셉과 의상부터 고른다",
        selected: false,
        type: Indicators.INtuition,
      },
      {
        text: "운동과 식단부터 짠다",
        selected: false,
        type: Indicators.Sensing,
      },
    ],
  },
  {
    direction: "내가 선호하는 강사 타입은?",
    options: [
      {
        text: "자세한 설명으로 잘 가르치는 강사",
        selected: false,
        type: Indicators.Thinking,
      },
      {
        text: "칭찬과 격려로 잘 이끌어주는 강사",
        selected: false,
        type: Indicators.Feeling,
      },
    ],
  },
  {
    direction: "운동에 필요한 장비를 구입할 때",
    options: [
      {
        text: "적당히 평점 좋은 걸로 빠르게 사는 편이다",
        selected: false,
        type: Indicators.Judging,
      },
      {
        text: "이것저것 찾고 비교하느라 오래 걸리는 편이다",
        selected: false,
        type: Indicators.Perceiving,
      },
    ],
  },
  {
    direction: "나는 새로운 운동을 시작할 때",
    options: [
      {
        text: "여러 사람과 함께할 수 있는 운동 크루를 알아보는 편이다",
        selected: false,
        type: Indicators.Extraversion,
      },
      {
        text: "혼자 할 수 있는 운동이나 1:1 레슨을 찾아보는 편이다",
        selected: false,
        type: Indicators.Introversion,
      },
    ],
  },
  {
    direction: "PT 첫날, 트레이너가 따라 하기 힘든 식단과 운동을 제안한다면?",
    options: [
      {
        text: "전문가가 짠 식단과 운동이니 일단 따라 해본다",
        selected: false,
        type: Indicators.Sensing,
      },
      {
        text: "무작정 따라 하고 싶지 않아, 더 나은 방법을 제안해 본다",
        selected: false,
        type: Indicators.INtuition,
      },
    ],
  },
  {
    direction: "내가 선호하는 운동의 유형은?",
    options: [
      {
        text: "승패 없이 다 같이 즐길 수 있는 운동",
        selected: false,
        type: Indicators.Feeling,
      },
      {
        text: "승자가 결정되는 경쟁 가능한 운동",
        selected: false,
        type: Indicators.Thinking,
      },
    ],
  },
  {
    direction: "헬스장에 갔더니 오늘이 휴관일이다",
    options: [
      {
        text: "헛걸음했지만 크게 신경 쓰이지 않는다",
        selected: false,
        type: Indicators.Perceiving,
      },
      {
        text: "미리 알아보지 않은 나 자신에게 화가 난다",
        selected: false,
        type: Indicators.Judging,
      },
    ],
  },
  {
    direction: "나는 운동을 해낸 게 뿌듯할 때",
    options: [
      {
        text: "뿌듯한 마음을 일기에 쓰거나, 제일 친한 친구에게만 자랑하는 편이다",
        selected: false,
        type: Indicators.Introversion,
      },
      {
        text: "친구들 단톡방에 인증샷을 보내거나, SNS에 은근슬쩍 자랑하는 편이다",
        selected: false,
        type: Indicators.Extraversion,
      },
    ],
  },
  {
    direction: "운동을 꾸준히 했는데도 체력과 몸매에 변화가 없는 것 같다면?",
    options: [
      {
        text: "아예 해본 적 없었던 새로운 운동을 시도해 본다",
        selected: false,
        type: Indicators.INtuition,
      },
      {
        text: "그동안 했던 운동의 횟수와 강도에 변화를 줘본다",
        selected: false,
        type: Indicators.Sensing,
      },
    ],
  },

  {
    direction: "운동 경기 중에 상대가 반칙을 한 것 같다",
    options: [
      {
        text: "잘잘못은 확실히 짚고 넘어간다",
        selected: false,
        type: Indicators.Thinking,
      },
      {
        text: "분위기 생각해서 적당히 참고 넘어간다",
        selected: false,
        type: Indicators.Feeling,
      },
    ],
  },

  {
    direction: "스스로 운동을 잘하고 있는지 확인하고 싶을 때",
    options: [
      {
        text: "운동 기록이나 몸무게 수치 변화를 확인한다",
        selected: false,
        type: Indicators.Judging,
      },
      {
        text: "눈바디과 느낌만으로도 충분하다",
        selected: false,
        type: Indicators.Perceiving,
      },
    ],
  },

  {
    direction: "운동을 끝낸 불금, 이대로 잠들기 아쉽다면?",
    options: [
      {
        text: "친한 친구는 뭐하고 있는지 연락해 본다",
        selected: false,
        type: Indicators.Extraversion,
      },
      {
        text: "보고 싶었던 영화 한 편을 보고 잔다",
        selected: false,
        type: Indicators.Introversion,
      },
    ],
  },
];
