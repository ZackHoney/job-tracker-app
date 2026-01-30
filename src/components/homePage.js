import React from 'react'
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="homePage">
            <div className="header">
                Welcome to Job Tracker!
                <div className="links">
                    <Link to="/signIn">Sign In</Link> 
                    <p>or</p>
                    <Link to='/signUp'>Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage