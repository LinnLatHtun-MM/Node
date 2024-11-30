import React, {useState, useEffect} from 'react';

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('mm-MM', {hour12: true});
    };

    return (
        <div style={clockStyle}>
            <h1>Digital Clock</h1>
            <h2>{formatTime(time)}</h2>
        </div>
    );
};

const clockStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#282c34',
    color: 'white',
    fontSize: '48px',
};

export default DigitalClock;
