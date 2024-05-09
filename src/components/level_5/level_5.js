
import './level_5.css'

import React, { useContext, useState, useEffect, Component } from "react";
import { Link, useNavigate } from "react-router-dom";

const Level_5 = () => { 
  const [isSolved, setIsSolved] = useState(false);
  const navigate = useNavigate();

  const validCredentials = {
    username: 'level5',
    password: 'level5'
  };

  useEffect(() => {
    if (!isSolved) {
      const enteredUsername = window.prompt('Level5-Enter your username:');

      if (enteredUsername === null) {
        navigate('/errorpage');
      }

      const enteredPassword = window.prompt('Level5-Enter your flag:');

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
                <div className='level5'>
                      <div className="level5-login-container" id="level5LoginContainer">
                    {
                        isSolved?<div className="level5-content" id="level5Content">

                        <h1>University of Colorado Denver CTF Challenge- Level 5</h1>
                        <p><b>Let's see how strong your networking skills are!!!</b></p>
                        <p><b>Scenario:</b></p>
      <p>Last night while we were checking our network. We have intercepted communication between two parties.</p>
      <p>The communication which we have intercepted is encrypted</p>
      <p>Find the encrypted flag and decode it</p>
      <p>Challenge Description:</p>
      <p><a href="https://drive.google.com/uc?export=download&id=1eTgoEhjx6xfEXhqEq3wbBQpPiVkaNqOC" download="encrypted_communication.pcap" className="link-container">Download the pcap file</a></p>
      <p>Use Wireshark to analyze the pcap file.</p>
      <button onClick={() => window.location.href = '/'}>Go to Welcome Page</button>
                    </div>:<></>
                    }    
                    </div>
                </div>    
        )
    }


export default Level_5;
