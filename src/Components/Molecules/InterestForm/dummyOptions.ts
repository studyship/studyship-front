export const categoryOptions = [
  {
    isActiveCategory: true,
    category: '디자인',
    list: [
      {
        groupName: 'Design',
        groupItems: [
          { type: '디자인 전체', isActiveItem: false },
          { type: 'UX · UI · GUI', isActiveItem: false },
          { type: '공모전', isActiveItem: false },
          { type: '3D', isActiveItem: false },
          { type: '게임 · AR · VR', isActiveItem: false },
          { type: 'Adobe 툴', isActiveItem: false },
          { type: '기타 디자인', isActiveItem: false },
        ],
      },
    ],
  },
  {
    isActiveCategory: false,
    category: '개발',
    list: [
      {
        groupName: 'Frontend',
        groupItems: [
          { type: '프론트 전체', isActiveItem: false },
          { type: 'React', isActiveItem: false },
          { type: 'Vue', isActiveItem: false },
          { type: 'AngularJs', isActiveItem: false },
          { type: 'Svelt', isActiveItem: false },
          { type: 'Jquery', isActiveItem: false },
          { type: 'HTML · CSS', isActiveItem: false },
          { type: '기타 프론트', isActiveItem: false },
        ],
      },
      {
        groupName: 'Backend',
        groupItems: [
          { type: '백엔드 전체', isActiveItem: false },
          { type: 'Go', isActiveItem: false },
          { type: 'Python', isActiveItem: false },
          { type: 'NodeJs', isActiveItem: false },
          { type: 'Java', isActiveItem: false },
          { type: 'C#', isActiveItem: false },
          { type: '기타', isActiveItem: false },
          { type: '기타 백엔드', isActiveItem: false },
        ],
      },
      {
        groupName: 'Mobile',
        groupItems: [
          { type: '모바일 전체', isActiveItem: false },
          { type: 'android', isActiveItem: false },
          { type: 'iOS', isActiveItem: false },
          { type: 'React Native', isActiveItem: false },
          { type: 'Flutter', isActiveItem: false },
          { type: '기타 모바일', isActiveItem: false },
        ],
      },
    ],
  },
  {
    isActiveCategory: false,
    category: '외국어',
    list: [
      {
        groupName: '영어',
        groupItems: [
          { type: 'TOEIC', isActiveItem: false },
          { type: 'TOEIC 스피킹', isActiveItem: false },
          { type: 'IELTS', isActiveItem: false },
          { type: '영어발표 · 면접', isActiveItem: false },
          { type: '영어회화', isActiveItem: false },
          { type: '기타 영어 · 독해', isActiveItem: false },
        ],
      },
      {
        groupName: '제2 외국어',
        groupItems: [
          { type: 'TOEIC', isActiveItem: false },
          { type: 'TOEIC 스피킹', isActiveItem: false },
          { type: 'IELTS', isActiveItem: false },
          { type: '영어발표 · 면접', isActiveItem: false },
          { type: '영어회화', isActiveItem: false },
          { type: '기타 외국어 · 독해', isActiveItem: false },
        ],
      },
    ],
  },
  {
    isActiveCategory: false,
    category: '취업',
    list: [
      {
        groupName: 'Design',
        groupItems: [
          { type: '취업 전체', isActiveItem: false },
          { type: '자소서 · 이력서', isActiveItem: false },
          { type: '인적성', isActiveItem: false },
          { type: '면접', isActiveItem: false },
          { type: '포트폴리오', isActiveItem: false },
          { type: '대외활동 · 공모전', isActiveItem: false },
          { type: '기타 취업', isActiveItem: false },
        ],
      },
    ],
  },
]
