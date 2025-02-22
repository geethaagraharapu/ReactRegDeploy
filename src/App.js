
import React from 'react';
import './index.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <img src="C:\Users\GEETHA AGRAHARAPU\Downloads\IMG_20240105_094406.jpg" alt="Profile" className="profile-pic" />
        <h1>Geetha Agraharapu</h1>
        <p>pursuring B-Tech Degree in computer science and Technology</p>
      </header>

      <section className="bio">
        <h2>About Me</h2>
        <p>
        Highly motivated and enthusiastic full-stack developer and B.Tech student in Computer Science and
Technology at Sasi Institute of Technology and Engineering.Passionate about building innovative, user- focused applications that solve real-world
challenges. Successfully completed an AWS Cloud internship and certified in Github basics, MongoDB.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
        Skilled in Python,
React, Node.js, and cloud technologies, with hands-on experience in full-stack development and cloud
computing.
        </ul>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Email:geetha.agraharapu@sasi.ac.in</p>
        <p>Phone: 8106--5828</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/geetha-agraharapu-aa0090281/]">https://www.linkedin.com/in/geetha-agraharapu-aa0090281/]</a></p>
      </section>

      <footer className="footer">&copy; 2025 Geetha Agraharapu</footer>
    </div>
  );
}

export default App;