import React from 'react';

import { Link } from 'react-router-dom';
const Hello = () => {
    return(
      <div class="form-container">
      <h2 class="text-center mb-4">Registration Form</h2>
      <form>
        <div class="form-group">
          <label for="name">First Name</label><br></br>
          <input type="text" class="form-control"size="30" id="fname" name="fname" placeholder='Enter First Name' required/><br></br>
        </div>
        <div class="form-group">
          <label for="name">Last Name</label><br></br>
          <input type="text" class="form-control" size="30" id="lname" name="lname"placeholder='Enter Last Name'  required/><br></br>
        </div>
        <div class="form-group">
          <label for="mobile">Mobile Number</label><br></br>
          <input type="tel" class="form-control" id="mobile" name="mobile" pattern="[0-9]{10}"placeholder='Enter Mobile Number'  required/><br></br>
          <small class="form-text text-muted">Please enter a 10-digit mobile number.</small><br></br>
        </div>
        <div class="form-group">
          <label for="email">Email address</label><br></br>
          <input type="email" class="form-control"size="30" id="email" name="email" placeholder='Enter Email' required/><br></br>
        </div>
        <div class="form-group">
          <label for="password">Password</label><br></br>
          <input type="password" class="form-control" size="16" id="password" name="password" placeholder='Enter Password' required /><br></br>
        </div>
        <div class="form-group">
          <label for="dropdown">Gender:</label><br></br>
          <select class="form-control" id="dropdown" name="dropdown" >
        
            <option value="option1">Male</option>
            <option value="option2">Female</option>
            <option value="option3">Others</option>
          </select><br></br>
        </div>
        <div class="form-group">
          <label for="dropdown">College Name</label><br></br>
          <select class="form-control" id="dropdown" name="dropdown" placeholder="select">
       
            <option value="option1">AitsK</option>
            <option value="option2">AitsR</option>
            <option value="option3">AitsT</option>
          </select><br></br>
        </div>
        <div class="form-group">
          <label for="file">Upload File</label><br></br>
          <input type="file" class="form-control-file" id="file" name="file"/><br></br><br></br>
        </div>
        <div class="form-button">
          <button type="submit" class="btn btn-primary">Register</button>
        </div>
        \
        
      </form>
    </div>
    );
}
export default Hello;