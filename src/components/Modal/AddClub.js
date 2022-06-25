import React, { useRef } from 'react'
import '../../style.css'
import { useModalOutClick } from '../../hooks/useModalOutClick'

const AddClub = ({ setIsAddClub }) => {
  const modalRef = useRef();
  useModalOutClick(modalRef, setIsAddClub);

  const joinHandle = () => {
    setIsAddClub(false);
  }

  return (
    <div className="bg-black/40 absolute top-0 z-40 w-full h-full flex justify-center">
        <div className="bg-white relative rounded-3xl mt-20 w-11/12 md:w-1/3 h-1/4 z-50 flex flex-col justify-center items-center" ref={modalRef}>
            <input className="input-gray w-11/12 h-8 m-1 pl-2 text-center text-gray-500" placeholder="동아리 초대 코드를 입력하세요"></input>
            <button className="bg-yellow text-white font-bold rounded-lg p-2 w-1/3 m-3" onClick={() => { joinHandle() }}>가입하기</button>
        </div>
    </div>
  )
}

export default AddClub