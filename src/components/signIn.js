import React from 'react'
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className='signIn'>
        <div className="header">
            <Link to="/signOut">Sign Out</Link>
        </div>
        <div className="form">
            Sign In Form
        </div>
    </div>
  )
}

export default SignIn