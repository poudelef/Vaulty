import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [startTyping, setStartTyping] = useState(false);
  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    // Fetch data from the backend
    fetch('http://localhost:5000/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setBackendData(data); // Store backend data in state
      })
      .catch(err => console.log(err));

    // This will make sure the typewriter only starts once the component is mounted
    setStartTyping(true);
  }, []);

  return (
    <div className="main">
      <div className="inner_main">
        <div className="right">
          <img src={require('../../assets/logo.png')} alt="Right section content" />
        </div>
        <div className="left">
          <div className="text-content">
            {startTyping && (
              <h2>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 80,
                    strings: ["Business = Time"],
                  }}
                />
              </h2>
            )}
            <p className="p1">Invest wise and easy</p>
            <Link to="/User_info" className="cta-button">Get Started</Link>
          </div>
        </div>
      </div>
      <div className="second_main">
        <div className="left_down">
          <div className="text-content">
            <p className="p2">Secure Your Future, One Investment at a Time</p>
          </div>
        </div>
        <div className="right_down">
          <img className='money_img' src={require('../../assets/money.png')} alt="Right section content" />
        </div>
      </div>
      
      <div className='third_main'>
        <h1>Submit inquiry Form</h1>
        <form>
          <label htmlFor="fname">First name:</label><br />
          <input type="text" id="fname" name="fname" /><br />
          <label htmlFor="lname">Last name:</label><br />
          <input type="text" id="lname" name="lname" /><br />
          <label htmlFor="email">Email:</label><br />
          <input type="text" id="email" name="email" /><br />
          <label htmlFor="phone">Phone number:</label><br />
          <input type="number" id="phone" name="phone" /><br />
          <input className="submit" type="submit" value="Submit" />
        </form>
      </div>

      {/* Optionally display backend data */}
      {backendData && <div>{backendData.message}</div>}
    </div>
  );
};

export default Home;
