
// 백엔드 : 0
// 프론트 : 1
// 디자인: 2
// 기획 : 3

// 4가지 결과 

const qnaList = [
  {
    q: '1. 학교에서 프로젝트 수업을 진행하는데 교수님께서 팀 빌딩을 해도 좋고 혼자 진행해도 좋다고 말씀하셨다. 당신은 팀 활동과 개인 활동 중 무엇을 선택할 것인가?',
    a: [
      { answer: 'a. 프로젝트는 사람들과 협업하는 묘미지!', type: [1,3] },
      { answer: 'b. 나는 혼자 하는 게 편해..', type: [2,0] },
      { answer: 'c. 흠 난 둘 다 상관 없어',type:[3]},
    ]
  },
  {
    q: '2. 팀 활동을 할 때 주어진 역할 중 한 가지를 선택한다면?',
    a: [
      { answer: 'a. ppt 만들기 (이쁘게 보이는게 발표할 때 더 집중하는데 도움이 될 거야!)', type: [1,2] },
      { answer: 'b. 자료조사 (발표에서 중요한 건 자료조사랑 주장에 대한 근거지!)', type: [0] },
      { answer: 'c. 발표 (다 필요 없고 난 말하는 거 좋아하니까 발표할래)', type: [3] },
    ]
  },
  {
    q: '3. 팀플을 하는데 ppt만드는 역할을 맡게 되었다. 당신의 ppt 만들기 스타일은?',
    a: [
      { answer: 'a. 음.. 그냥 ppt켜서 하얀 슬라이드에 글만적자…끄적..끄적..', type: [0] },
      { answer: 'b. ppt는 예쁜 게 짱 이지..! 템플릿부터 찾자!!', type: [1] },
      { answer: 'c. 템플릿이 뭐야 디자인쯤 이야 내가 다 만들어야지!!', type: [1,2] }
    ]
  },
  {
    q: '4. 최신 맥북이 나왔다! 나의 반응은...!?',
    a: [
      { answer: 'a. 와..디자인..미친..잘 빠진거 봐', type: [2,1] },
      { answer: 'b. 뭐..? M2칩을 탑재했다고? 성능 미친거 아니야??', type: [0] },
      { answer: 'c. 맥북,,? 나 윈도우 써서 관심없어..ㅋ..',type:[4]},
    ]
  },
  {
    q: '5. 친구와 오랜만에 영화를 보자고 했다 넷플릭스에서 보고 싶은 영화를 고르는데,, 당신의 취향은?',
    a: [
      { answer: 'a. 추리 소설 같이 범죄자 찾는게 재밌어', type: [0] },
      { answer: 'b. 시나리오가 잘 짜진 좀 인기있는 영화 보자', type: [3]},
      { answer: 'c. 난 장르 상관없고 영상미 예쁜 영화가 최고야', type: [1,2] },
    ]
  },
  {
    q: '6. 신년을 맞아 새로운 다이어리를 살 예정인 당신, 어떤 다이어리를 살 것인가?',
    a: [
      { answer: 'a. 일정을 효율적으로 관리하기 위해 주요 일정들을 정리할 수 있는 깔끔한 다이어리가 최고지!!', type: [3] },
      { answer: 'b. 취향 저격하는 개성 있는 예술적인 디자인의 다이어리 !', type: [1,2]},
      { answer: 'c. 디자인 상관없고 그냥 다이어리면 산다 !', type: [0] },
    ]
  },
  {
    q: '7. 내용이 어려운 공부를 할 때 당신의 스타일은?',
    a: [
      { answer: 'a. 이해가 될 때까지 넘어가지 않고 공부한다. ', type: [0] },
      { answer: 'b. 어차피 이해 못할 것 같으니 그냥 외워버리고 빨리 진도를 나간다.', type: [3]},
      { answer: 'c. 그냥 공부를 안 한다.^^',type:[4]},
    ]
  },
  {
    q: '8. 두근두근 드디어 자취를 시작했다. 아무것도 없는 집.. 이제 인테리어를 시작하려고 한다. 당신은 어떻게 집을 꾸밀 것인가?',
    a: [
      { answer: 'a. 일단 제일 먼저 방 사이즈부터 재고 크기에 맞는 가구들을 찾아본다.', type: [0,3] },
      { answer: 'b. 이쁜 가구가 최고지 사이즈 상관없고 그냥 내 맘에 드는 이쁜 가구부터 찾아본다.', type: [1,2]},
      { answer: 'c. 하.. 귀찮아.. 그냥 대충 산다...', type: [0] },
    ]
  },
]

const infoList = [
  {
    name: '뒤에서 묵묵히 모든걸 해낼께! <백엔드>',
    desc: '묵묵히 뒤를 담당하는 당신 ! 멋사에 가입해 백엔드를 배워봐요!'
  },
  {
    name: '보이는 부분은 내가책임질께! <프론트엔드>',
    desc: '보이는 것을 책임지는 당신 ! 멋사에 들어와 백과함께 사이트를 만들어봐요!'
  },
  {
    name: '예술가의 정신을 가지고있는 당신은 <디자인>',
    desc: '뛰어난 디자인적 감각 멋사에 들어와 사이트를 꾸며봐요!'
  },
  {
    name: '기획은 나한테 맡기라구~ <기획>',
    desc: '모든일에는 기획이 앞선다!! 멋사에 들어와 아이디어를 기획해봐요!!!'
  }
]
