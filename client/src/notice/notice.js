import dummy1 from './images/dummy1.jpg'
import dummy2 from './images/dummy2.jpg'
import dummy3 from './images/dummy3.jpg'

export let notices = [
    {
        key: '1',
        date: '2021-10-29',
        title: '첨단 레이저 연구실 공지사항입니다',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting,
           remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
            , and more recently with desktop publishing software like Aldus
             PageMaker including versions of Lorem Ipsum.`,
        tags: ['공지사항'],
        images:[dummy1,dummy2,dummy3]
    },
    {
        key: '2',
        date: '2021-10-30',
        title: '현재 진행되어지고 있는 프로젝트 소식입니다',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting,
           remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
            , and more recently with desktop publishing software like Aldus
             PageMaker including versions of Lorem Ipsum.`,
        tags: ['연구개발소식'],
    },
    {
        key: '3',
        date: '2021-10-31',
        title: '새로운 학부연구생 OOO 씨가 첨단레이저 연구실에 들어왔습니다.',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting,
           remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
            , and more recently with desktop publishing software like Aldus
             PageMaker including versions of Lorem Ipsum.`,
        tags: ['경조사'],
    }

].reverse();