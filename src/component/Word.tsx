import { useState } from "react";
import React from "react";

export interface IProps {
    word: IWord; // word를 가진 prop를 IProps로
}

export interface IWord {
    day: string;
    eng: string;
    kor: string;
    isDone: boolean;
    id: number;
}

export default function Word(props: IProps) {
    const [word, setWord] = useState(props.word); // word는 IProps에서 IWord로 타입 지정 됨
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone); // isDone은 IWord에서 boolean으로 타입 지정 됨

    function toggleShow() {
        setIsShow(!isShow);
    }

    function toggleDone() {
        // setIsDone(!isDone);
        fetch(`http://localhost:3001/words/${word.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...word,
                isDone: !isDone
            })
        })
        .then(res => {
            if(res.ok) {
                setIsDone(!isDone);
            }
        });
    }

    function del() {
        if(window.confirm('삭제 하시겠습니까?')) {
            fetch(`http://localhost:3001/words/${word.id}`, {
                method: 'DELETE',
            })
            .then(res => {
                if(res.ok) {
                    setWord({
                        ...word, // Word를 {id: 0}으로 set하려면 word의 타입에 맞지 않으므로 기존에 있던 property를 가져와 줌
                        id: 0,
                    })
                }
            });
        }
    }

    if(word.id === 0) {
        return null;
    }

    return (
        <tr className={isDone ? 'off' : ''} key={word.id}>
            <td><input type="checkbox" checked={isDone} onChange={toggleDone}/></td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={toggleShow}>뜻 {isShow ? '숨기기' : '보기'}</button>
                <button onClick={del} className="btn_del">삭제</button>
            </td>
        </tr>
    );
}