import React, { useState, useEffect } from 'react';
import './Greeting.css';

const Greeting = () => {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const hour = new Date().getHours();
        let newGreeting;
        if (hour < 12) {
            newGreeting = 'Good Morning';
        } else if (hour < 18) {
            newGreeting = 'Good Afternoon';
        } else {
            newGreeting = 'Good Evening';
        }
        setGreeting(newGreeting);
    }, []);

    return (
        <div className="greeting-container">
            <p className='greeting-text'>{greeting}, Welcome to our website!</p>
            <div className='icon-container'>
                <i class="fa-brands fa-react"></i>
            </div>
        </div>
    );
};

export default Greeting;
