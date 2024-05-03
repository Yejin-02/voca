import Day from './component/Day';
import DayList from './component/DayList';
import Header from './component/Header';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<DayList />}/>
          <Route path='/day' element={<Day />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
