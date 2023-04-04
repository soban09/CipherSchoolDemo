import React, { useEffect, useState } from 'react'

const NavBar = ({ userId, logout }) => {

  const [user, setUser] = useState({});

  const logoutHandler = () => {
    localStorage.removeItem('token')
    logout(false)
  }

  useEffect(() => {
    const extractUser = async () => {
      try {
        const response = await fetch(`http://localhost:5000/user/${userId}`, {
          method: 'GET'
        })
        if(!response.ok){
          throw new Error('Cant extract the user')
        }
        const data = await response.json()
        console.log(data);
        setUser(data.user)
      }
      catch (err) {
        console.log(err);
      }
    }
    extractUser()
  }, [])

  return (
    <div>
      <h1>{user.fName}</h1>
      <p>{user.email}</p>
      <button onClick={logoutHandler}>LOGOUT</button>
    </div>
  )
}

export default NavBar