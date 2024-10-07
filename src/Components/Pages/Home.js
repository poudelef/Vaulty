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
        <h2>Hello</h2>
      </div>
    </div>
  );
};

export default Home;
