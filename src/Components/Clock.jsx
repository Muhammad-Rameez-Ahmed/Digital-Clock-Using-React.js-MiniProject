import React, { useState } from 'react'



const Clock = () => {
    let todaytime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(todaytime);



    const updateTime=()=>{
        let todaytime = new Date().toLocaleTimeString();
        setTime(todaytime);
    }
  
setInterval(updateTime,1000);



    // let date = new Date().toLocaleTimeString();
    // let dateshow = date.getFullYear() + '/' + (((date.getMonth() + 1) < 10) ? '0' : '') + (date.getMonth() + 1) + '/' + ((date.getDate() < 10) ? '0' : '') + date.getDate();






    return (
        <>
            <h1>Digital Clock Mini-Project</h1>
            <h2>{time}</h2>
            {/* <h2>{dateshow}</h2> */}
        </>

    )
}



export default Clock;