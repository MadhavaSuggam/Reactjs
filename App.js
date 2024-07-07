import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import SignIn from './signin';
import SignUp from './signup';
import './App.css';

import Hello from './Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/Register' element={<Hello></Hello>}/>
      </Routes>
    </Router>
  );
}

export default App;
