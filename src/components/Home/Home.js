import React from 'react';
import './Home.css';

const Home = () => {
    const toggleTheme = (e) => {
        const theme = e.target.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
    };

    return (
        <div className="home">
            <header>
                <h1>Welcome to Learning React</h1>
                <p>Your gateway to mastering modern web development.</p>
            </header>
            <section className="intro">
                <h2>What is React?</h2>
                <p>React is a JavaScript library for building user interfaces, developed by Facebook.</p>
            </section>
            <section className="features">
                <h2>Key Features</h2>
                <ul>
                    <li>Component-based architecture</li>
                    <li>Virtual DOM for efficient rendering</li>
                    <li>JSX - JavaScript XML for component rendering</li>
                </ul>
            </section>
            <section className="audience">
                <h2>Who should learn React?</h2>
                <p>React is ideal for web developers interested in creating fast, interactive UIs.</p>
            </section>
            <section className="benefits">
                <h2>Benefits of Learning React</h2>
                <ul>
                    <li>Faster rendering with virtual DOM</li>
                    <li>Reusable components for efficient development</li>
                    <li>Strong community and extensive ecosystem</li>
                    <li>High demand in the job market</li>
                </ul>
            </section>
            <section className="call-to-action">
                <h2>Start Learning React Today</h2>
                <p>Explore our courses and tutorials to get started.</p>
            </section>
            <section className='button'>   
                <button onClick={toggleTheme}>Sign up</button>
            </section>
        </div>
    );
}

export default Home;
