import React from 'react'
import '../style.css'

const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center m-auto pt-10">
      <h1 className="yellow font-bold text-3xl m-10">회원가입</h1>
      <div className="flex flex-col m-auto items-center bg-white rounded-3xl p-10 pb-5 w-11/12 md:w-1/3 shadow-lg">
        <input className="input-gray w-11/12 h-8 m-1 pl-2" placeholder="이메일" />
        <input className="input-gray w-11/12 h-8 m-1 pl-2" placeholder="비밀번호" />
        <input className="input-gray w-11/12 h-8 m-1 pl-2" placeholder="비밀번호 재확인" />
        <input className="input-gray w-11/12 h-8 m-1 pl-2" placeholder="이름" />
        <input className="input-gray w-11/12 h-8 m-1 pl-2" placeholder="생년월일" />
        <div className="w-11/12">
          <label className="m-1 float-left text-gray-500"><input type="checkbox"/> 관리자 여부</label>
        </div>
        <button className="bg-yellow text-white font-bold rounded-lg p-2 w-11/12 m-3">회원가입</button>
      </div>
    </div>
  )
}

export default RegisterPage