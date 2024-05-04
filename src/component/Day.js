import { useParams } from "react-router-dom";
import dummy from "../DB/data.json";
import EmptyPage from "./EmptyPage";

export default function Day() {
  const {day} = useParams();
  const wordList = dummy.words.filter(word => Number(word.day) === Number(day));

  // day/dafasdf 같은 이상한 주소를 처리하기 위한 추가 코드
  const {days} = dummy;
  let a = [];
  days.map(elem => a.push(Number(elem.day) === Number(day)));

  if (a.includes(true)) {
    // day/:day에서 day가 dummy.days에 포함되면 그 날의 단어 리스트 반환
    return (
      <>
      <h3>Day {day}</h3>
        <table>
          <tbody>
            {wordList.map(word => (
              <tr key={word.id}>
                <td>{word.eng}</td>
                <td>{word.kor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  } else {
    // 없으면 빈페이지 반환
    return (
      <EmptyPage />
    )
  }
}