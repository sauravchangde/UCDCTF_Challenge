import './level_3.css'

import React, { useContext, useState, useEffect, Component } from "react";
import { Link, useNavigate } from "react-router-dom";

const Level_3 = () => { 
  const [isSolved, setIsSolved] = useState(false);
  const navigate = useNavigate();

  const validCredentials = {
    username: 'level3',
    password: 'level3'
  };

  useEffect(() => {
    if (!isSolved) {
      const enteredUsername = window.prompt('Level3-Enter your username:');

      if (enteredUsername === null) {
        navigate('/errorpage');
      }

      const enteredPassword = window.prompt('Level3-Enter your flag:');

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
                <div className='level3'>
                      <div className="level3-login-container" id="level3LoginContainer">
                    {
                        isSolved?<div className="level3-content" id="level3Content">

                        <h1>University of Colorado Denver CTF Challenge- Level 3</h1>
                        <p>The Sentinel's Cipher: A Cybersecurity Odyssey Beneath the sunlit peaks, the University of Colorado Denver holds the key to infinite knowledge Find the shift key in the Apollo snap and decrypt the Apollo file</p>
                        <p><a href="https://drive.google.com/uc?export=download&id=1RjoBs10k0hqNBdIvX1FZW52z6U3FzTSy" download="Apollo.png" className="link-container">Download the Apollo Snap</a></p>
                        <p>Decrypt the Whisper audio file to find the flag Use the name of the audio file to decrypt the cipher</p>
                        <p><a href="https://drive.google.com/uc?export=download&id=1Bp2et31rjMAHXULpK_nADBBLUKqahFnW" download="Whisper.wav" className='link-container'>Download The Sentinel's Whisper</a></p>
                        <p>SOLVE THE MYSTERY QUESTION TO GET THE FLAG</p>
                        <button onClick={() => window.location.href = '/level4'}>Unlock Level 4</button>
                    </div>:<></>
                    }    
                    </div>    
                </div>
        )
    }


    export default Level_3;
