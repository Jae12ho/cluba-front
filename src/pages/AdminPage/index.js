import React, { useState } from 'react'
import AdminClubList from '../../components/AdminClubList';

const AdminPage = () => {
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <div>
      {
        isAdmin && (
          <AdminClubList />
        )
      }
      {
        !isAdmin && (
          <div className="flex justify-center">
            <div className="text-gray-400 m-5 text-3xl">관리자 계정이 아닙니다.</div>
          </div>
        )
      }
    </div>
  )
}

export default AdminPage