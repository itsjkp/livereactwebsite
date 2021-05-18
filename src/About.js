import React from 'react'
import {useParams,useLocation} from 'react-router-dom'
const About = () => {
    let { id } = useParams();
    let location = useLocation();
    console.log(location)
    return (
        <div>
            <h1>Hello About us</h1>
            <h2>Showing : {id}</h2>
            <h3>Current Location is: {location.pathname}</h3>
        </div>
    )
}

export default About
