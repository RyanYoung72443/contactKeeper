import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About This App</h1>
      <p className='my-1'>
        This is a full stack React app for keeping contacts.
        Made with a Mongo Database and Node RestAPI server utilizing express.
        This project was created and distrubuted by <a className='git' href='https://github.com/ShawnYoung72443'><i class="fab fa-github"></i>Shawn Young</a>
      </p>
      <p className='bg-dark p'>
        <strong>Version</strong> 1.0.0
      </p>
    </div>
  );
};

export default About;
