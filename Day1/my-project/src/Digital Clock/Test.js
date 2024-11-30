import React, {useEffect} from 'react';

const Test = () =>{
    const [time,setTime] = React.useState(new Date());

    useEffect(()=>{
        const timer = setInterval(()=> {
            setTime(new Date());
        },1000);

        return () => clearInterval(timer);
    },[])

    const formatTime= (date) => {
        let toLocaleTimeString=date.toLocaleTimeString('mm_MM', { hour12: true });
        return toLocaleTimeString;
    }


}

export default Test;