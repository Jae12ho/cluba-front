import React, { useState } from 'react'
import '../style.css'
import AddClub from './Modal/AddClub';
import IsNotDoing from './Modal/IsNotDoing';

const ClubList = () => {
  const [clubList, setClubList] = useState([{id: 1, name: '동아리1', isAttend: true, isDoing: true}, {id: 2, name: '동아리2', isAttend: false, isDoing: true}, {id: 3, name: '동아리3', isAttend: false, isDoing: false}]);
  const [isNotDoing, setIsNotDoing] = useState(false);
  const [isAddClub, setIsAddClub] = useState(false);

  const attendHandle = (c) => {
    if (!c.isDoing) {
      setIsNotDoing(true);
    }
    else {
      let newClubList = clubList.map(club => {
        if (club.id === c.id) {
          club.isAttend = !club.isAttend;
        }
        return club;
      });
      setClubList(newClubList);
    }
  }

  return (
    <div className="flex justify-center">
      <div className="bg-white rounded-3xl w-11/12 md:w-1/2 p-5 m-10 shadow-lg">
        <h1 className="font-bold text-xl mb-5">동아리 목록</h1>
        {clubList.map((club) => (
          <div key={club.id} className="border-2 rounded-lg flex justify-between p-1 pl-3 pr-3 m-2">
            <div>
              <div className="font-bold text-lg">{club.name}</div>
              <div className="text-gray-500 text-sm">PM 7:00</div>
            </div>
            {
              club.isAttend && (<button className="bg-yellow text-white font-bold rounded-lg pr-3 pl-3 opacity-50">출석완료</button>)
            }
            {
              !club.isAttend && (<button className="bg-yellow text-white font-bold rounded-lg pr-3 pl-3" onClick={() => { attendHandle(club) }}>출석</button>)
            }
          </div>
        ))}
        <button onClick={()=> {setIsAddClub(true)}}className="rounded-full bg-yellow float-right text-white w-10 h-10 m-2"></button>
      </div>



      {isAddClub && (
        <AddClub setIsAddClub={setIsAddClub} />
      )}
      {isNotDoing && (
        <IsNotDoing setIsNotDoing={setIsNotDoing} />
      )

      }
    </div>
  )
}

export default ClubList