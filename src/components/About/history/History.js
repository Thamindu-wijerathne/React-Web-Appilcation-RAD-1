import React from "react";
import './History.css';

function History() {
    return (
        <div className="container">
            <h1>Our History</h1>
            <section className="intro">
                <p>Welcome to learnReact.com, your go-to resource for mastering React!</p>
            </section>
            
            <section className="mission">
                <h2>Early Beginnings</h2>
                <p>learnReact.com was founded in 2015 by a group of passionate web developers who saw the potential of React when it was first open-sourced by Facebook. What started as a small blog to share tips and tutorials quickly grew into a comprehensive platform for React learning.</p>
            </section>
            
            <section className="growth">
                <h2>Growth and Expansion</h2>
                <p>By 2017, learnReact.com had expanded its offerings to include video tutorials, interactive coding challenges, and a vibrant community forum. Our team grew as well, bringing on board experienced developers, educators, and designers to create high-quality content.</p>
            </section>
            
            <section className="community">
                <h2>A Community Effort</h2>
                <p>One of the keys to our success has been our commitment to the community. We regularly collaborate with industry experts, host webinars, and organize React conferences to keep our users updated with the latest trends and best practices in React development.</p>
            </section>
            
            <section className="future">
                <h2>Looking Ahead</h2>
                <p>Today, learnReact.com is trusted by thousands of developers worldwide as a top resource for learning React. As we look to the future, we remain dedicated to providing the best learning experience possible, with new courses, tools, and community initiatives.</p>
                <p>Thank you for being a part of our journey. Happy coding!</p>
            </section>
        </div>
    );
}

export default History;
