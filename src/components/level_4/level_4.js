import './level_4.css'

import React, { useContext, useState, useEffect, Component } from "react";
import { Link, useNavigate } from "react-router-dom";

const Level_4 = () => { 
  const [isSolved, setIsSolved] = useState(false);
  const navigate = useNavigate();

  const validCredentials = {
    username: 'level4',
    password: 'wannacry'
  };

  useEffect(() => {
    if (!isSolved) {
      const enteredUsername = window.prompt('Level4-Enter your username:');

      if (enteredUsername === null) {
        navigate('/errorpage');
      }

      const enteredPassword = window.prompt('Level4-Enter your flag:');

      if (enteredUsername === validCredentials.username && enteredPassword === validCredentials.password) {
        // Authentication successful
        // alert('Congrats you have opened the door to level-1 :');
        setIsSolved(true);
      } else {
        // Authentication failed
        navigate('/errorpage');
      }
    }
}, []);

    
        return (
                <div className='level4'>
                      <div className="level4-login-container" id="level4LoginContainer">
                    {
                        isSolved?<div className="level4-content" id="level4Content">

                        <h1>University of Colorado Denver CTF Challenge- Level 4</h1>
                        <p>Let's make it even more interesting with SQL injection</p>
                        <p>Check out the link: <a href="http://challenges.ringzer0team.com:10003" target="_blank">over here</a></p>
                        <p>Use SQL injection and find the flag from the above website.</p>
                        <p>Wait the level is not done yet. What's a challenge without a twist</p>
                        <p>Hint: Reverse("I'm a mix of numbers and letters so fine,
                          In base sixteen, I truly shine.
                          Take me to base ten, a simple design,
                          What am I, a secret in each line?)</p>
                          <button onClick={() => window.location.href = '/level5'}>Unlock Level 5</button>
                    </div>:<></>
                    }    
                    </div>
                </div>    
        )
    }


export default Level_4
