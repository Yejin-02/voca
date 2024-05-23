import { FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch.ts";
import React from "react";
import { IDay } from "./DayList";

let CreateWord = () => {
    const days : IDay[] = useFetch(`http://localhost:3001/days`);
    const history = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    let onSubmit = (e: FormEvent) => {
        e.preventDefault(); // 기본 기능(새로고침)을 방지
        
        // null이 아님을 체크하고 시작
        if(!isLoading && dayRef.current && engRef.current && korRef.current) { 
            setIsLoading(true)

            const day = dayRef.current.value;
            const eng = engRef.current.value;
            const kor = korRef.current.value;

            fetch(`http://localhost:3001/words/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    day,
                    eng,
                    kor,
                    isDone: false,
                }),
            })
            .then(res => {
                if(res.ok) {
                    alert('생성이 완료되었습니다.');
                    history(`/day/${day}`);
                    setIsLoading(false);
                }
            });
        }
    }


    // ref로 <?>를 가져올 건데 이때 null일 가능성이 있음
    // type을 지정 -> engRef에 대한 파악 없이 어떤 기능 쓸 수 있는지 알 수 있음
    const engRef = useRef<HTMLInputElement>(null);
    const korRef = useRef<HTMLInputElement>(null);
    const dayRef = useRef<HTMLSelectElement>(null);

    return (
        <>
        <form>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef} />
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터" ref={korRef} />
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day =>
                        (<option key={day.id} value={day.day}>
                            {day.day}
                        </option>)
                    )}
                </select>
            </div>
            <button style={{
                opacity: isLoading ? 0.3 : 1.0,
            }}onClick={onSubmit}>{isLoading ? "Saving..." : "저장"}</button>
        </form>
        </>
    );
}

export default CreateWord;