import React, {useState} from 'react'
import NavBar from '../Components/NavBar'
import About from '../Components/About'
import Map from '../Components/Map'
import Details from '../Components/Details'


const Home = ({userId, logout, update}) => {

    // console.log(userId);

    return (
        <div>
            <NavBar userId={userId} logout={logout} update={update}/>
            <About userId={userId} logout={logout} update={update}/>
            <Map userId={userId} logout={logout} update={update}/>
            <Details userId={userId} logout={logout} update={update}/>
        </div>
    )
}

export default Home