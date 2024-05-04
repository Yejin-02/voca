import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList() {
  // 우선은 days에 빈 배열
  const days = useFetch('http://localhost:3001/days'); 
  return (
    <ul className="list_day">
      {days.map(day => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
  );
}

// useEffect(함수); 렌더링을 끝내고 하고 싶은 작업(예. API 호출)을 함수로 넣기
// 원하지 않는 상황에서의 호출 막기 위해 의존성 배열을 두번째 인수로
// useEffect(함수, [의존, 원하는, 변수를, 배열에])
// 렌더링 직후 딱 한 번만 useEffect(함수, []) 와 같이 빈 배열 이용
