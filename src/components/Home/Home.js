import React from 'react';
import './Home.css';
import image1 from "./1.jpg"
import reactPic from "./reactPic.png"
import codePic from "./2.jpg";
import learnStudent from "./3.jpg"
import movPic from "./4.gif"

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
            <img src={image1} alt="1st pic" className='firstPic'></img>
            <section className="intro">
                <h2>What is React?</h2>
                <p>React is a JavaScript library used for building user interfaces,
                    particularly for single-page applications where UI updates are frequent.
                    Developed and maintained by Facebook,
                    React allows developers to create reusable UI components that efficiently render
                    and update data when the underlying data changes.
                    It employs a virtual DOM to optimize rendering performance and offers
                    a declarative syntax that simplifies the process of building complex 
                    UIs by breaking them down into smaller, manageable components.</p>
                <img src={reactPic} alt="2st pic" className='secondPic'></img>
            </section>
            <section className="features">
                <h2>Key Features</h2>
                <ul>
                    <li>Component-based architecture</li>
                    <li>Virtual DOM for efficient rendering</li>
                    <li>JSX - JavaScript XML for component rendering</li>
                </ul>
            </section>
            
                <img src={codePic} alt="3rd pic" className='codePic'></img>
            <section className="audience">
                <h2>Who should learn React?</h2>
                <p>
                    React is ideal for front-end developers, software engineers,
                    and web designers looking to enhance their skills in building interactive user interfaces.
                    It benefits anyone interested in modern web development,
                    including those transitioning from other frameworks or languages. 
                    Beginners and experienced developers alike can create dynamic, responsive applications with React..
                </p>
            </section>
            <img src={learnStudent} alt='4th pic' className='learnStudent'></img>
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
            <img src={movPic} alt="4th pic" className='movPic'></img>
            <section className='button'>   
                <button onClick={toggleTheme}>Sign up</button>
            </section>
        </div>
    );
}

export default Home;
