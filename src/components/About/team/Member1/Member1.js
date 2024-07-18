import React from 'react';
import '../Member.css'
import member1Photo from './Member1Pic.png'; // Make sure you have an image file for the member

function Member1() {
  return (
    <div className="member-container">
      <table className="member-profile">
        <tbody>
          <tr>
            <td>
              <img src={member1Photo} alt="John Doe" className="member-photo" />
            </td>
            <td className="member-info">
              <h1>John Doe</h1>
              <p>Role: Senior React Developer</p>
            </td>
          </tr>
        </tbody>
      </table>

      <section className="member-bio">
        <h2>Bio</h2>
        <p>
          John Doe has over 10 years of experience in front-end development, with a particular focus on React. 
          He has contributed to numerous high-profile projects and has a passion for building scalable and maintainable applications.
        </p>
      </section>
      <section className="member-expertise">
        <h2>Expertise</h2>
        <ul>
          <li>React and Redux</li>
          <li>JavaScript (ES6+)</li>
          <li>TypeScript</li>
          <li>HTML & CSS</li>
          <li>GraphQL</li>
          <li>Webpack and Babel</li>
          <li>Performance Optimization</li>
        </ul>
      </section>
      <section className="member-contact">
        <h2>Contact</h2>
        <p>Email: johndoe@example.com</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">linkedin.com/in/johndoe</a></p>
      </section>
    </div>
  );
}

export default Member1;
