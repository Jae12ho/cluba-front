import React, { useState, createContext, useContext } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import AdminPage from './pages/AdminPage/index'
import Nav from './components/Nav'
import Footer from './components/Footer'
import './style.css'

export const IsLoginContext = createContext({
  isLogin: true,
  setIsLogin: '',
  isAdmin: false,
});

const Layout = () => {
  const {isLogin, setIsLogin, isAdmin } = useContext(IsLoginContext);

  return (
    <IsLoginContext.Provider value={{ isLogin: isLogin, isAdmin: isAdmin, setIsLogin: setIsLogin}}>
      <Nav />

      <Outlet />

      <Footer />
    </IsLoginContext.Provider>
  )
}

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <div className="app bg-gray">
      <BrowserRouter>
        <IsLoginContext.Provider value={{ isLogin: isLogin, isAdmin: isAdmin, setIsLogin: setIsLogin }}>
          <Routes>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route path="/" element={<Layout />}>
              <Route index element={<MainPage />}/>
              <Route path="admin" element={<AdminPage />} />
            </Route>
          </Routes>
        </IsLoginContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
