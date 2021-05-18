import React,{useState} from 'react'

const Timer = () => {
    const time = new Date().toLocaleTimeString();
    const [currTime, setstate] = useState(time);
    const refresh = ()=>{
        const freshTime = new Date().toLocaleTimeString();
        setstate(freshTime);
    }
    return (
        <div>
            <h1>{currTime}</h1>
            <button onClick={refresh}>Refresh</button>
        </div>
    )
}

export default Timer
