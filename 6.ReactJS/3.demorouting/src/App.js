import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Homecomp from './components/Home';
import Aboutcomp from './components/About';
import Contactcomp from './components/Contact';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
      <nav>
        <ul>
          <li><Link to={'/'}>Home</Link></li>

          <li><Link to={'/About'}>About</Link></li>

          <li><Link to={'/Contact'}>Contact</Link></li>
        </ul>
      </nav>
        <Routes>
          <Route path='/' element={<Homecomp/>}></Route>
          <Route path='/About' element={<Aboutcomp/>}></Route>
          <Route path='/Contact' element={<Contactcomp/>}></Route>
        </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
