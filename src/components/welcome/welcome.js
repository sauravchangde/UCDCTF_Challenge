import React, { Component } from 'react'
import './welcome.css'
import { useNavigate } from 'react-router-dom';


class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSolved: false,
          };
    }

    
    render() {
        return (
         
                   <div className='welcome'>
                    {
                        <div className='intro'>
                          <center>
                            <h2>Welcome to the UCDCTF Challenge</h2>
                            </center>    
                          <div className='button-container'>
                            <button className='welcome-buttons' onClick={() => window.location.href = '/level1'}> Level 1</button>
                            <button className='welcome-buttons' onClick={() => window.location.href = '/level2'}>Level 2</button>
                            <button className='welcome-buttons' onClick={() => window.location.href = '/level3'}>Level 3</button>
                            <button className='welcome-buttons' onClick={() => window.location.href = '/level4'}>Level 4</button>
                            <button className='welcome-buttons' onClick={() => window.location.href = '/level5'}>Level 5</button>
                            <button className='welcome-buttons' onClick={() => window.location.href = '/'}>Level 6</button>
                          </div>
                          <p>Prepare to test your skills and hack your way through various levels of cybersecurity challenges. Each level will push your abilities to the limit as you attempt to capture the flag.</p>
                          <p>It contains of total seven levels and we hope you gus love it</p>
                          <p>User name for each level is level and the specific number of the level without space</p>
                          <div className='level-list'>
                            <center>
                                <li>Designed by Team of two members by Saurav Changde and Sunil Vechalapu</li>
                                <li>UNDER GUIDENCE OF Mr.Jafarian Haadi</li>
                              </center>
                          </div>
                      </div>
                    }    
                   </div>

                   

        )
    }
}

export default Welcome;


// function level_1() {
    
// }