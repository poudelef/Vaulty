import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import './Home.css';

const Home = () => {
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
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
                    loop : true,
                    delay: 80,
                    strings: ["Business = Time"],
                  }}
                />
              </h2>
            )}
            <p className="p1">Invest wise and easy</p>
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
          <label for="fname"> First name:</label><br></br>
          <input type="text" id="fname" name="fname"></input><br></br>
          <label for="lname"> Last name:</label><br></br>
          <input type="text" id="lname" name="lname"></input><br></br>
          <label for="email"> Email:</label><br></br>
          <input type="text" id="email" name="email"></input><br></br>
          <label for="phone"> Phone number:</label><br></br>
          <input type="number" id="phone" name="phone"></input><br></br>
          <input className = "submit"type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
};

export default Home;
