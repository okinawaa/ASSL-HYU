import timeImage from './publicationImages/myTimeImage.png'
import num1 from './publicationImages/num1.png'
import num2 from './publicationImages/num2.png'
import num3 from './publicationImages/num3.png'


export let publications = [
    {
        key: '1',
        date: '2021-10-29',
        author: '박찬혁',
        title: '게시판 페이지 테스트 글입니다.',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting,
           remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
            , and more recently with desktop publishing software like Aldus
             PageMaker including versions of Lorem Ipsum.`,
        journals: ['신문'],
        images: [timeImage, timeImage, timeImage]
    },
    {
        key: '2',
        date: '2021-10-30',
        author: '김찬혁',
        title: '사이트 방문해주셔서 감사합니다.',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting,
           remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
            , and more recently with desktop publishing software like Aldus
             PageMaker including versions of Lorem Ipsum.`,
        journals: ['학회지'],
    },
    {
        key: '3',
        date: '2021-12-23',
        author: '김혜림',
        title: '글 작성 Guide 자료 만들고 있습니다. ',
        desc: `이 부분이 본문이 들어갈 자리입니다. 실제 이 글 자체도 본문으로 사용됩니다.`,
        journals: ['논문'],
    },
    {
        key: '4',
        date: '2021-12-23',
        author: '붕어빵',
        title: '이 글은 이미지를 위한 테스트입니다',
        desc: '이 부분은 글의 본문인데 이미지가 이 본문 아래로 들어갈거에요',
        journals: ['이미지'],
        images: [num1, num2, num3]
    }

].reverse();