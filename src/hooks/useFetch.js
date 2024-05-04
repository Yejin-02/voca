import { useState, useEffect } from "react";

let useFetch = (url) => {
    const [data, setData] = useState([]);

    // useEffect(함수, [])를 통해 렌더링 직후에 한 번 API 호출을 실행
    useEffect(() => {
        // fetch(url) 호출 성공 시 promise 타입 객체 반환
        fetch(url)
        .then(res => {
        // json으로 변환
            return res.json();
        })
        .then(data => {
            setData(data);
        })
    },[url]);

    return data;
}

export default useFetch;