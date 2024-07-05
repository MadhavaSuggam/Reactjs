import React from 'react';
import { Outlet,Link } from 'react-router-dom';

const Form = () => {
  return (
    <div>
      <h>Home Page</h>
    <nav>
      <ol>
        <li>
          <Link to="/register.js">Registration</Link>
        </li>
        <li>
          <Link to="/login2.js">Login</Link>
        </li>
        
      </ol>
    </nav>
    </div>
  );
}

export default Form;
