import React, { useState, useEffect } from 'react';
import './Timer.css'

const Timer = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    // Format the time to display hours, minutes, and seconds
    const formattedTime = currentTime.toLocaleTimeString();

    return (
        <div className='timer'>
            <p>Current Time: {formattedTime}</p>
        </div>
    );
};

export default Timer;
