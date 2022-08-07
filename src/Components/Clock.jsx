import React, { useState } from 'react'



const Clock = () => {
    let todaytime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(todaytime);



    const updateTime = () => {
        let todaytime = new Date().toLocaleTimeString();
        setTime(todaytime);
    }

    setInterval(updateTime, 1000);
    return (
        <>
            <h1> 🕒Digital Clock 👌 Today Date📅</h1>
            <h2 >{time}</h2>

        </>

    )
}

export default Clock;