import { useParams } from "react-router-dom";
import EmptyPage from "./EmptyPage";
import Word from "./Word";
import useFetch from "../hooks/useFetch";

export default function Day() {
  const {day} = useParams();

  const WordList = useFetch(`http://localhost:3001/words?day=${day}`);
  const Days = useFetch(`http://localhost:3001/days`);
  
  let a = [];
  Days.map(elem => a.push(Number(elem.day) === Number(day)));

  if (a.includes(true)) {
    return (
      <>
      <h3>Day {day}</h3>
        <table>
          <tbody>
            {WordList.map(word => ( 
              <Word word={word} key={word.id}/>
            ))}
          </tbody>
        </table>
      </>
    );
  } else {
      return (
      <EmptyPage />
    )
  }
}