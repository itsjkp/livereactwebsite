import React, { useContext } from 'react'
import {firstName,lastName} from './A'
const C = () => {
    const fname = useContext(firstName);
    const lname = useContext(lastName);
    return (
        <div>
            <h1>Hi This is {fname}{lname}</h1>
            
        </div>
    )
}

export default C
