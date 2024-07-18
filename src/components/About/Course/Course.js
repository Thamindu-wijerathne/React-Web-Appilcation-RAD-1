import React from 'react';
import reactPic from './reactPic.png';
import firstpic from './1.jpg';
import './Course.css';

function Course() {
    return(
        <div className="container">
        <h1>Corse Module And Details</h1>
  
        <section className="intro">
          <p>
            Welcome to ReactLearn.com, your go-to platform for mastering React development.
            Whether you're just starting your journey into front-end development or looking to enhance your skills with the latest React techniques,
            ReactLearn.com is here to support your growth.
          </p>
        </section>
        
        <img src={reactPic} alt="2st pic" className='secondPic'></img>

        <section className="mission">
          <h2>Our Target</h2>
          <p>
            At ReactLearn.com, our mission is to empower developers of all levels with the knowledge and confidence to create exceptional user experiences using React.
            We believe in the power of React's declarative and component-based approach to building interfaces,
            and we're committed to making learning React accessible and enjoyable for everyone.
          </p>
        </section>
  
        <img src={firstpic} alt="2st pic" className='codePic'></img>

        <section className="offerings">
          <h2>What We Offer</h2>
  
          <div className="offering">
            <h3>Comprehensive Learning Paths</h3>
            <p>
              Explore structured learning paths tailored to your experience level. From beginner fundamentals to advanced topics like state management with Redux and server-side rendering with Next.js,
              our curated paths ensure you learn React in a systematic and efficient manner.
            </p>
          </div>
  
          <div className="offering">
            <h3>Hands-On Projects and Tutorials</h3>
            <p>
              Gain practical experience through hands-on projects and step-by-step tutorials. Build real-world applications, collaborate with peers,
              and apply your skills in a supportive learning environment.
            </p>
          </div>
  
          <div className="offering">
            <h3>Expert-Led Courses</h3>
            <p>
              Learn from industry experts who bring their insights and practical tips into every course. Our instructors are passionate about React and dedicated to helping you succeed in your development journey.
            </p>
          </div>
  
          <div className="offering">
            <h3>Community Engagement</h3>
            <p>
              Join a vibrant community of developers. Participate in forums, attend webinars, and contribute to open-source projects. At ReactLearn.com, we believe in the power of community to foster growth and collaboration.
            </p>
          </div>
        </section>
      </div>
    );
}

export default Course;