import Day from './component/Day';
import DayList from './component/DayList';
import Header from './component/Header';
import EmptyPage from './component/EmptyPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';

// git add . 으로 수정 사항 반영
// git commit -m "completed lecture 10"
// git push origin 1-complete-lecture-10 => 원격 레포에 올려라
// pull request는 위의 브랜치를 main에 합병을 시켜줌 => 이거까지 하면 끝

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<DayList />}/>
          <Route path="/day/:day" element={<Day/>} />
          <Route path="/create_word" element={<CreateWord/>} />
          <Route path="/create_day" element={<CreateDay />} />
          <Route path="*" element={<EmptyPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
