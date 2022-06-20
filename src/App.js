import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import MainPage from './pages/mainPage'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'
import AdminPage from './pages/AdminPage/index'
import Nav from './components/Nav'
import Footer from './components/Footer'
import './style.css'

const Layout = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <Nav isLogin={isLogin} setIsLogin={setIsLogin} />

      <Outlet />

      <Footer />
    </div>
  )
}

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="app bg-gray">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage isLogin={isLogin} setIsLogin={setIsLogin} />}/>
          <Route path="/register" element={<RegisterPage isLogin={isLogin} setIsLogin={setIsLogin} />}/>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage isLogin={isLogin} setIsLogin={setIsLogin} />}/>
            <Route path="admin" element={<AdminPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
