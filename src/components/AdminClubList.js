import React, { useState } from 'react'
import '../style.css'
import AddClub from './Modal/AddClub';

const AdminClubList = () => {
  const [AdminClubList, setAdminClubList] = useState([{id: 1, name: '동아리1', isDoing: true}, {id: 2, name: '동아리2', isDoing: false}, {id: 3, name: '동아리3', isDoing: false}]);
  const [isAddClub, setIsAddClub] = useState(false);

  const doingHandle = (id) => {
    let newAdminClubList = AdminClubList.map(club => {
      if (club.id === id) {
        club.isDoing = !club.isDoing;
      }
      return club;
    });
    setAdminClubList(newAdminClubList);
  }

  return (
    <div className="flex justify-center">
      <div className="bg-white rounded-3xl w-1/2 p-5 m-10 shadow-lg">
        <h1 className="font-bold text-xl mb-5">동아리 목록</h1>
        {AdminClubList.map((club) => (
          <div key={club.id} className="border-2 rounded-lg flex justify-between p-1 pl-3 pr-3 m-2">
            <div>
              <div className="font-bold text-lg">{club.name}</div>
              <div className="text-gray-500 text-sm">PM 7:00</div>
            </div>
            {
              club.isDoing && (<button className="cus-bg-red text-white font-bold rounded-lg pr-3 pl-3" onClick={() => { doingHandle(club.id) }}>활동중지</button>)
            }
            {
              !club.isDoing && (<button className="bg-yellow text-white font-bold rounded-lg pr-3 pl-3" onClick={() => { doingHandle(club.id) }}>활동시작</button>)
            }
          </div>
        ))}
        <button onClick={()=> {setIsAddClub(true)}}className="rounded-full bg-yellow float-right text-white w-10 h-10 m-2"></button>
      </div>



      {isAddClub && (
        <AddClub setIsAddClub={setIsAddClub} />
      )}
    </div>
  )
}

export default AdminClubList