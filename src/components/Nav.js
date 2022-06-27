import React, { useState, useContext } from 'react'
import '../style.css'
import { IsLoginContext } from '../App';

const Nav = () => {
  const [onDropdown, setOnDropdown] = useState(false);
  const { isLogin, setIsLogin, isAdmin } = useContext(IsLoginContext);

  const myMenuHandle = () => {
    setOnDropdown(!onDropdown);
  }

  return (
    <nav className="flex justify-between items-center bg-white h-14 p-1 pl-7 pr-7 shadow-sm">
      <div className="yellow font-bold text-3xl">CLUBA</div>
      {
      !isLogin && (
        <div className="flex justify-between">
          <a href="login" className="m-1 text-gray-500">로그인</a>
          <a href="register" className="m-1 text-gray-500">회원가입</a>
        </div>
      )
      }
      {
        isLogin && (
          <div className="w-14 h-14">
            <button className="rounded-full bg-gray-200 float-right text-white w-10 h-10 m-2" onClick={() => { myMenuHandle() }}></button>
            {
              onDropdown && (
                <div className="relative right-12 w-24 bg-white shadow-lg z-10 rounded-lg p-2 flex flex-col justify-center items-cender transition duration-300 ease-in-out">
                  <button className="text-center text-sm text-gray-500 p-1" onClick={() => { setIsLogin(false); myMenuHandle(); }}>로그아웃</button>
                  <button className="text-center text-sm text-gray-500 p-1">내 정보</button>
                </div>
              )
            }
          </div>
        )
      }
    </nav>
  )
}

export default Nav