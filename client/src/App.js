import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Routes/Home'
import Login from './Routes/Login'
import Register from './Routes/Register.jsx'
import './index.css'

const App = () => {
  const [userId, setUserId] = useState('');
  const [isLoggedIn, setisLoggedIn] = useState(false)
  const [userUpdated, setUserUpdated] = useState(false)

  const setisLoggedInHandler = (val) => {
    setisLoggedIn(val)
  }

  const setUserUpdatedHandler = (val) => {
    setUserUpdated(val)
  }

  useEffect(() => {
    const AuthenticateUser = async () => {
      try {
        const response = await fetch('http://localhost:5000/auth', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        })
        if (!response.ok) {
          setisLoggedIn(false);
          throw new Error('User is not Logged in!')
        }
        else {
          const data = await response.json()
          // console.log(data)
          // console.log(data.user.userId);
          setUserId(data.user.userId);
          setisLoggedIn(true);
        }
      }
      catch (err) {
        console.log(err);
      }
    }
    AuthenticateUser();
  }, [isLoggedIn, userUpdated])

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Home 
        userId={userId} 
        logout={setisLoggedInHandler} 
        update={setUserUpdatedHandler}
      /> : <Login Login={setisLoggedInHandler} />} />

      <Route path='/login' element={isLoggedIn ? <Home
        userId={userId} 
        logout={setisLoggedInHandler} 
        update={setUserUpdatedHandler}
      /> : <Login Login={setisLoggedInHandler} />} />
      
      <Route path='/register' element={isLoggedIn ? <Home 
        userId={userId} 
        logout={setisLoggedInHandler} 
        update={setUserUpdatedHandler}
      /> : <Register Login={setisLoggedInHandler} />} />
    </Routes>
  )
}

export default App