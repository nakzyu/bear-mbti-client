import { Indicators } from "../types/indicators";
import { Question } from "../types/question";

export const Questions: Question[] = [
  {
    direction: "충동적으로 두 달 후 바디 프로필을 덜컥 결제해버린 당신,",
    options: [
      {
        text: "이미 엎질러진 물…\n돈 버리지 않기 위해 실현 가능한 운동과 식단을 짠다.",
        selected: false,
        type: Indicators.Sensing,
      },
      {
        text: "바디 프로필 당일 멋지게 촬영할 나를 상상하며 컨셉과 의상부터 고른다.",
        selected: false,
        type: Indicators.INtuition,
      },
    ],
  },
  {
    direction:
      "PT를 시작한 당신,\n트레이너가 왠지 나에게 맞지 않는 식단과 운동 플랜을 제안하는 것 같다.",
    options: [
      {
        text: "의문은 들지만, 전문성이 있는 트레이너가 짠 식단과 운동이니 믿고 따라보기로 한다.",
        selected: false,
        type: Indicators.Sensing,
      },
      {
        text: "왜 나에게 맞지 않는 플랜대로 하라는 건지 도저히 그냥 따를 수가 없다. 플랜 수정을 제안한다. ",
        selected: false,
        type: Indicators.INtuition,
      },
    ],
  },
  {
    direction:
      "감량을 위해 한 가지 운동을 꾸준히 해온 당신,\n그럼에도 체력이나 몸에 변화가 없는 것 같다면?",
    options: [
      {
        text: "그동안 했던 운동에서 벗어나지 않고 강도를 높인다.",
        selected: false,
        type: Indicators.Sensing,
      },
      {
        text: "그동안 해본 적 없었던 새로운 운동을 시도한다.",
        selected: false,
        type: Indicators.INtuition,
      },
    ],
  },
  {
    direction:
      "1:1 운동 수업을 듣게 된 당신,\n두 유형의 강사 중 한 명을 선택할 수 있다면?",
    options: [
      {
        text: "말투와 표정은 무뚝뚝하지만, 이론과 원리 설명을 통해 정확하게 지도하는 강사",
        selected: false,
        type: Indicators.Thinking,
      },
      {
        text: "상세한 지식 전달보다는 운동을 재밌게 할 수 있도록 칭찬하고 격려해 주는 강사",
        selected: false,
        type: Indicators.Feeling,
      },
    ],
  },
  {
    direction: "다른 사람과 운동을 하게 된다면,\n어떤 유형의 운동이 좋은가?",
    options: [
      {
        text: " 나의 불타는 승부욕을 발휘할 수 있게, 경쟁하며 승패가 결정되는 운동이 좋다.",
        selected: false,
        type: Indicators.Thinking,
      },
      {
        text: "경쟁은 딱 질색! 이기고 지는 것보다는 으쌰 으쌰 함께 즐기는 운동이 좋다.",
        selected: false,
        type: Indicators.Feeling,
      },
    ],
  },
  {
    direction: "운동 경기를 진행하던 중,\n상대편이 아무래도 반칙을 한 것 같다.",
    options: [
      {
        text: "열받네...? 경기를 중단하고 누가 잘못한 건지 확실하게 시시비비를 가린다.",
        selected: false,
        type: Indicators.Thinking,
      },
      {
        text: "좋은 게 좋은 거지…! 다들 즐기려고 모인 거니 적당히 무마하고 경기를 이어간다.",
        selected: false,
        type: Indicators.Feeling,
      },
    ],
  },
  {
    direction: "운동에 필요한 장비를 사려고 하는 당신,",
    options: [
      {
        text: "어떤 장비가 좋을지 이것저것 찾아보느라 사는 데 오래 걸린다. 그러다 결국 안 살 때도 있다.",
        selected: false,
        type: Indicators.Perceiving,
      },
      {
        text: "너무 많은 선택지 중 고르기가 머리 아프다. 적당히 괜찮은 걸 찾아 빠르게 산다.",
        selected: false,
        type: Indicators.Judging,
      },
    ],
  },
  {
    direction:
      "운동을 하려고 헬스장에 도착했는데,\n알고 보니 매월 한번 있는 휴관일이었다.",
    options: [
      {
        text: "오늘 휴관일이었네? 어쩔 수 없군.",
        selected: false,
        type: Indicators.Perceiving,
      },
      {
        text: "오늘이 휴관일인 걸 미리 알아보지 못한 나 자신에게 화가 난다.",
        selected: false,
        type: Indicators.Judging,
      },
    ],
  },
  {
    direction: "스스로 다이어트와 운동을 잘하고 있는지 확인하고 싶을 때 나는,",
    options: [
      {
        text: "내 눈과 느낌이 제일 정확하지! 눈바디만으로도 충분하다.",
        selected: false,
        type: Indicators.Perceiving,
      },
      {
        text: "내 몸은 철저히 내 통제하에 관리한다. 몸무게 수치 변화나 운동 기록을 통해 확인한다.",
        selected: false,
        type: Indicators.Judging,
      },
    ],
  },
  {
    direction: "그룹 운동과 개인 운동 중 나는,",
    options: [
      {
        text: "다른 사람들과 으쌰 으쌰 함께하는 운동이 재밌지! 운동 크루나 그룹 운동을 알아본다.",
        selected: false,
        type: Indicators.Extraversion,
      },
      {
        text: "운동하는 시간만큼은 나에게 집중하고 싶다. 혼자 하거나 1:1 레슨을 알아본다.",
        selected: false,
        type: Indicators.Introversion,
      },
    ],
  },
  {
    direction:
      "운동을 하는 나... 너무 멋져...!\n운동한 걸 자랑하고 싶을 때 나는,",
    options: [
      {
        text: "이 세상 사람들아, 나의 멋짐을 알아줘! SNS나 단톡방에 운동한 인증샷을 동네방네 자랑한다.",
        selected: false,
        type: Indicators.Extraversion,
      },
      {
        text: "나 자신 너무 멋진걸...? 혼자 뿌듯해하거나 친한 친구 몇 명에게만 자랑한다.",
        selected: false,
        type: Indicators.Introversion,
      },
    ],
  },
  {
    direction:
      "나 자신 너무 멋진걸...?\n혼자 뿌듯해하거나 친한 친구 몇 명에게만 자랑한다.",
    options: [
      {
        text: "운동했으니 뒤풀이를 해야지! 다른 사람들과 맛있는 음식에 맥주 한잔하러 간다.",
        selected: false,
        type: Indicators.Extraversion,
      },
      {
        text: "오늘 에너지를 모두 끌어다 썼으니 집에서 재밌는 영화 보면서 맥주 한 캔 한다.",
        selected: false,
        type: Indicators.Introversion,
      },
    ],
  },
];
