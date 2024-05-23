import Day from './component/Day.tsx';
import DayList from './component/DayList.tsx';
import Header from './component/Header.tsx';
import EmptyPage from './component/EmptyPage.tsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CreateWord from './component/CreateWord.tsx';
import CreateDay from './component/CreateDay.tsx';

// json-server --watch ./src/DB/data.json --port 3001

// git add .
// git commit -m "completed lecture ??"
// git push origin ?? => 원격 레포에 올려라
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
