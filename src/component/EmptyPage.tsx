import { Link } from "react-router-dom";
import React from "react";

export default function EmptyPage() {
    return(
    <>
    <h3>빈 페이지입니다</h3>
    <Link to="/">메인 화면으로 돌아가기</Link>
    </>
    );
}