import logo from './logo.svg';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Home from './component/Home';
import User from './component/User';
import Info from './component/Info';
import Board from './component/Board';
import BoardContent from './component/BoardContent';
import Header from "./layout/Header";
import MyPage from './component/MyPage';

function App() {

  /* 

    p.403

    라우터 적용방법
    1. index.js에서 브라우저 라우터로 app을 감싸줍니다.
    2. 각각의 컴포넌트를 만듭니다.
    3. Route를 이용해서 주소별로 컴포넌트 연결합니다.


    Link 컴포넌트
    - a태그를 대체합니다.
    - to속성에 "라우터 주소" 적어서 이동하면 됩니다.

    쿼리스트링 ?키=값
    - useLocation()
    - useSearchParams()

    URL 파라미터
    - 라우터를 설정 /경로/:값
    - useParams() 값을 받습니다.
  */

  return (

    <Routes> {/* 라우터들 */}
      {/* 여기는 라우터 설정들, 이 주소 path로 가면 이게 보여지게 하겠다 */}

      {/* 중첩라우터 - 공통부분처리 (Header에 가서 Outlet 컴포넌트 표기) */}
      <Route element={<Header/>}>
        <Route path='/' element={<Home/>}/> {/* 각각은 라우트 태그 이용 */}
        <Route path='/user' element={<User/>}/> {/* 쿼리스트링 */}
        <Route path='/info/:num' element={<Info/>}/> {/* URL파라미터 */}
      </Route>

      {/* 그냥 이렇게 하면 각기 다른 페이지 2개, 각각 다른 화면이 보입니다. 
        <Route path='/board' element={<Board/>}/>
        <Route path='/board/:num' element={<BoardContent/>}/> 
      */}

      {/* 중첩라우터 - 공통부분처리 (Board에 가서 Outlet 컴포넌트 표기) */}
      <Route path='/board' element={<Board/>}>{/* 공통으로 서용하는 부분 */}
        <Route path=':num' element={<BoardContent/>}/> 
      </Route>

      {/* navigate 컴포넌트 */}
      <Route path='/mypage' element={<MyPage/>}/>

    </Routes>

  );
}

export default App;
