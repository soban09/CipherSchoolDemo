import React, { useState } from 'react'

const Register = ({ Login }) => {
  const [userDetails, setuserDetails] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
  })

  const userDetailsChangeHandler = (e) => {
    setuserDetails(prevState => {
      return {
        ...prevState,
        [e.target.id]: e.target.value
      }
    });
    // console.log(userDetails);
  }

  const submitDetailsHandler = async (e) => {
    e.preventDefault()
    console.log(userDetails);

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        body: JSON.stringify(userDetails),
        headers: {
          "Content-Type": "application/json"
        }
      })
      if (!response.ok) {
        throw new Error('Something bad happened')
      }

      Login(true)
      setuserDetails({
        fName: "",
        lName: "",
        email: "",
        password: "",
      })
      console.log('submitted!!')

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <form>
        <input onChange={userDetailsChangeHandler} id="fName" type="text" value={userDetails.fName} placeholder="First Name" />
        <input onChange={userDetailsChangeHandler} id="lName" type="text" value={userDetails.lName} placeholder="Last Name" />
        <input onChange={userDetailsChangeHandler} id="email" type="email" value={userDetails.email} placeholder="E-mail" />
        <input onChange={userDetailsChangeHandler} id="password" type="password" value={userDetails.password} placeholder="Password" />
        <button onClick={submitDetailsHandler} type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Register