import React, { useState } from 'react'

const Login = ({Login}) => {
  const [userDetails, setuserDetails] = useState({
    email: "",
    password: "",
  })

  const userDetailsChangeHandler = (e) => {
    setuserDetails(prevState => {
      return {
        ...prevState,
        [e.target.id]: e.target.value
      }
    })
  }

  const submitDetailsHandler = async (e) => {
    e.preventDefault()

    try{
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        body: JSON.stringify(userDetails),
        headers: {
          "Content-Type": "application/json"
        }
      })

      if(!response.ok){
        throw new Error('Something bad happened')
      }
      
      const data = await response.json();
      // console.log(data);
      localStorage.setItem('token', data.token);
      Login(true)
    }
    catch(err){
      console.log(err);
    }

    setuserDetails({
      email: "",
      password: "",
    })
  }

  return (
    <div>
      <form>
        <input onChange={userDetailsChangeHandler} id="email" value={userDetails.email} type="text" placeholder="E-mail" />
        <input onChange={userDetailsChangeHandler} id="password" value={userDetails.password} type="password" placeholder="Password" />
        <button onClick={submitDetailsHandler} type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login