import React from 'react'
import ClubList from '../components/ClubList'

const mainPage = ({ isLogin, setIsLogin }) => {
  return (
    <div>
      {
        isLogin && (
          <ClubList />
        )
      }
      {
        !isLogin && (
          <div className="flex justify-center">
            <div className="text-gray-400 m-5 text-3xl">로그인을 해라.</div>
          </div>
        )
      }
    </div>
  )
}

export default mainPage