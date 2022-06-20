import React from 'react'
import "../style.css";

const loginPage = ({ isLogin, setIsLogin }) => {
  return (
    <div className="flex flex-col items-center m-auto pt-10">
      <h1 className="yellow font-bold text-3xl m-10">로그인</h1>
      <div className="flex flex-col m-auto items-center bg-white rounded-3xl p-10 pb-5 w-1/3 shadow-lg">
        <input className="input-gray w-11/12 h-8 m-1 pl-2" placeholder="이메일" />
        <input className="input-gray w-11/12 h-8 m-1 pl-2" placeholder="비밀번호" />
        <button className="bg-yellow text-white font-bold rounded-lg p-2 w-11/12 m-3">로그인</button>
        <a href="../register" className="text-sm text-gray-500 mt-3">회원가입</a>
      </div>
    </div>
  )
}

export default loginPage