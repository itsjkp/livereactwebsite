import React from 'react';
import {useParams} from 'react-router-dom';

const AboutUs = ()=>{
    const {fname,lname} = useParams();
    return (
        <>
            <h1>Hello My Name is {fname}{lname}</h1>
        </>
    );
}
export default AboutUs;