import './level_2.css'

import React, { useContext, useState, useEffect, Component } from "react";
import { Link, useNavigate } from "react-router-dom";

const Level_2 = () => { 
  const [isSolved, setIsSolved] = useState(false);
  const navigate = useNavigate();

  const validCredentials = {
    username: 'level2',
    password: '1'
  };

  useEffect(() => {
    if (!isSolved) {
      const enteredUsername = window.prompt('Level2-Enter your username:');

      if (enteredUsername === null) {
        navigate('/errorpage');
      }

      const enteredPassword = window.prompt('Level2-Enter your flag:');

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
         
         <div className='level2'>
                     <div className="login-container" id="loginContainer">
                    {
                        isSolved?<div className="level-content" id="levelContent">

                        <h1>University of Colorado  CTF Challenge - Level 2</h1>
                        <p>Speculate, Think and Decode!!</p>
                        <p>Download the file: <a href="https://drive.google.com/uc?export=download&id=1VhmUW3zlY8QTBwIzuUUGGWHbXpWwewtA" target="_blank">code_level-2</a></p>
                        <p>You can find a hint on this page</p>
                        <div dangerouslySetInnerHTML={{__html: "<!-- Analyze the code to find what cipher it is. Correct the wrong code accordingly to get the final flag for next level -->"}} />
                        <div dangerouslySetInnerHTML={{__html: "<!-- Encrypted text:    , Key: -->"}} />
                        <button onClick={() => window.location.href = '/level3'}>Unlock Level 3</button>
                    </div>:<></>
                    }    
                    </div>    
         </div>
        )
    }

    export default Level_2;
