import useFetch from "../hooks/useFetch.ts";
import { useNavigate } from "react-router-dom";
import { IDay } from "./DayList";
import React from "react";

let CreateWord = () => {
    const days: IDay[] = useFetch(`http://localhost:3001/days`);
    const history = useNavigate();

    let addDay = (e: React.MouseEvent) => {
        e.preventDefault(); // 기본 기능(새로고침)을 방지
        
        fetch(`http://localhost:3001/days/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                day: days.length+1,
            }),
        })
        .then(res => {
            if(res.ok) {
                alert('추가가 완료되었습니다.');
                history('/');
            }
        });
    }

    return(
    <>
        <h3>현재 일수: {days.length}일</h3>
        <button onClick={addDay}>Day 추가</button>
    </>
    );
}

export default CreateWord;