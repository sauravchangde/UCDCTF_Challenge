import './level_1.css'
import Error_Page from '../errorpage/errorpage';

import React, { useContext, useState, useEffect, Component } from "react";
import { Link, useNavigate } from "react-router-dom";

const Level_1 = () => { 
  const [isSolved, setIsSolved] = useState(false);
  const navigate = useNavigate();

  const validCredentials = {
    username: 'level1',
    password: 'welcome'
  };

  useEffect(() => {
    if (!isSolved) {
      const enteredUsername = window.prompt('Level1-Enter your username:');

      if (enteredUsername === null) {
        navigate('/errorpage');
      }

      const enteredPassword = window.prompt('Level1-Enter your flag:');

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
         
    <div className='level1'>
      <div className="login-container" id="loginContainer">
     {
         isSolved?<div className="level-content" id="levelContent">

         <h1>University of Colorado  CTF Challenge - Level 1</h1>
         <p>Hi Students, Our Professor Haadi Jafarian has mentioned in his lecture class that he met Diffie-Hellman at a Conference</p>
         <p>We have somehow managed to intercept their Confidential discussion</p>
         <p>They have briefly discussed about Nine previous research papers while drinking Seven glasses of wine <br/>Then debated over Six algorithms of Cryptography reffering to Eight books of renowned authors.</p>

         <button onClick={() => window.location.href = '/level2'}>Unlock Level 2</button>
     </div>:<></>
     }    
     </div>    
    </div>

)
}

export default Level_1;