import './App.css'
import type { PostProps } from './Components/PostCard';
import PostCardList from './Components/PostCardList';

function App() {
  const posts: PostProps[] = [
    {
      "id": 1,
      "image": "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_16.11.10.png",
      "text": "фыв",
      "date": "2021-10-06",
      "lesson_num": 123,
      "title": "фывфывфыв",
      "author": 7,
    },
    {
      "id": 2,
      "image": "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_17.37.38.png",
      "text": "Text",
      "date": "2021-10-07",
      "lesson_num": 48,
      "title": "Title",
      "author": 7,
    },
    {
      "id": 3,
      "image": "https://tms-studapi-dev.s3.amazonaws.com/media/unnamed.jpeg",
      "text": "Hello!",
      "date": "2021-10-07",
      "lesson_num": 23,
      "title": "B-52!",
      "author": 97,
    },
    {
      "id": 4,
      "image": "https://tms-studapi-dev.s3.amazonaws.com/media/unnamed_5c5gF9H.jpeg",
      "text": "Hi",
      "date": "2021-10-07",
      "lesson_num": 22,
      "title": "b-52",
      "author": 97,
    },
    {
      "id": 5,
      "image": "https://tms-studapi-dev.s3.amazonaws.com/media/unnamed_MQSTowL.jpeg",
      "text": "Test",
      "date": "2021-10-07",
      "lesson_num": 59,
      "title": "b-52",
      "author": 97,
    },
    {
  "id": 6,
  "image": "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-10-07_%D0%B2_10.12.21.png",
  "text": "Hello",
  "date": "2021-10-07",
  "lesson_num": 44,
  "title": "b-52",
  "author": 99,
},
  ];
  return (
    <div>
      <PostCardList posts={posts} />
    </div>
  );

}

export default App
