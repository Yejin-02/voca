import { useParams } from "react-router-dom";
// import EmptyPage from "./EmptyPage";
import Word from "./Word.tsx";
import useFetch from "../hooks/useFetch.ts";
import { IWord } from "./Word.tsx";
import React from "react";

export default function Day() {
  // const {day} = useParams(); -> day를 가지는 객체인지 확신할 수 없음
  const {day} = useParams<{day: string}>(); // 제너릭으로 

  const WordList: IWord[] = useFetch(`http://localhost:3001/words?day=${day}`);
  // const Days = useFetch(`http://localhost:3001/days`);
  
  // let a = [];
  // Days.map(elem => a.push(Number(elem.day) === Number(day)));

  // if (a.includes(true)) {
    return (
      <>
      <h3>Day {day}</h3>
      {WordList.length === 0 && <span>Loading...</span>}
        <table>
          <tbody>
            {WordList.map(word => ( 
              <Word word={word} key={word.id}/>
            ))}
          </tbody>
        </table>
      </>
    );
/*  } else {
      return (
      <EmptyPage />
    )
  } */
}