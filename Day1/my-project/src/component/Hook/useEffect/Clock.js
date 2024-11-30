import React, { useEffect, useRef, useState } from 'react';

function Clock() {

    const [time, setTime] = useState(new Date());
    console.log(time);

    const formatTime = () => {

        let hour = time.getHours();
        let minutes = time.getMinutes();
        let second = time.getSeconds();

        let format = hour >= 12 ? "PM" : "AM";
        return `${hour} : ${minutes} : : ${second} : ${format}`;
    }

    useEffect(()=>{
        const intervalTime =setInterval (() => {
            setTime(new Date())
        },1000);

        return ()=> {
            console.log("Clear");
            clearInterval(intervalTime);
        };
    },[])


    //compoonent will mount ,div mount
//     <script>
//     function updateClock() {
//         const now = new Date();
//         const hours = String(now.getHours()).padStart(2, '0');
//         const minutes = String(now.getMinutes()).padStart(2, '0');
//         const seconds = String(now.getSeconds()).padStart(2, '0');

//         const currentTime = `${hours}:${minutes}:${seconds}`;
//         document.getElementById('clock').textContent = currentTime;
//     }

//     setInterval(updateClock, 1000);  // Update the clock every second
//     updateClock();  // Initial call to display the clock immediately
// </script>


  return (
    <>
        <h1>Clock</h1>
        <h1>{formatTime()}</h1>
    </>
  );
};


export default Clock;

// useEffect , useRef home work
