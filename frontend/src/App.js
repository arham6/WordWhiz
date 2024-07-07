import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Game from './components/Game';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import { useAuthContext } from './hooks/useAuthContext';
import Loading from './components/Loading';
import Footer from './components/Footer';
function App() {
  // const {user}=useAuthContext()
  return (
    
    <div className="App">

    
      <Router>
        <Navbar/>
        <div className='pages'>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/play" element={<Game />} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/signup" element={<Signup/>} />
            
            
            
            {         
            /* <Route exact path="/play" element={user ? <Game /> : <Navigate to='/login'/>} />
            <Route exact path="/login" element={user ? <Navigate to='/'/> : <Login/>} />
            <Route exact path="/signup" element={user ? <Navigate to='/'/> : <Signup/>} /> */}
          </Routes>
        </div>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
