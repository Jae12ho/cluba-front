import React, { useRef } from 'react'
import { useModalOutClick } from '../../hooks/useModalOutClick';

const IsNotDoing = ({ setIsNotDoing }) => {
    const modalRef = useRef();
    useModalOutClick(modalRef, setIsNotDoing);

  return (
    <div className="bg-black/40 absolute top-0 z-40 w-full h-full flex justify-center">
        <div className="bg-white relative rounded-3xl mt-20 w-1/4 h-1/4 z-50 flex flex-col justify-center items-center" ref={modalRef}>
            <p className="text-gray-500">현재 활동 중이 아닙니다.</p>
            <button className="cus-bg-red text-white font-bold rounded-lg p-2 w-1/3 m-3" onClick={() => { setIsNotDoing(false) }}>확인</button>
        </div>
    </div>
  )
}

export default IsNotDoing