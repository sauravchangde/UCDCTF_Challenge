import React, { Component } from 'react'
import './errorpage.css'
import { useNavigate } from "react-router-dom";

class Error_Page extends Component {

    render() {
        return (
                <div className="background"> 
                {
                    <center>
                    <div className="error-message">
                    <h1 className='error-heading'>404</h1>
                    <p className='warning'>Page Not Found</p>
                    <p className="warning">Entered credentials are not correct!</p><br/><br/>
                        <button className='return' onClick={() => window.location.href = '/'}>Return to Welcome Page</button>
                    </div>
                    </center>
                }
                </div> 
                )
            }
}

    export default Error_Page