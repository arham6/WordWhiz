import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import Loading from './Loading';

const Home = () => {
  const { user, loading } = useAuthContext();

  if (loading) {
    return <Loading msg='Fetching Data' />;
  }

  return (
    <div className="home-container">
      {/* <h1>Welcome to Wordle Game</h1> */}
      <h1 style={{fontFamily: "Montserrat"}}>
      Unlock the mystery word in WordWhiz !<br/>
      can you crack the code in six tries ?
      </h1>

      <img className='wordwhiz-img' src="WordwhizImage.png" alt="WordwhizIMG"/>
      
      {user ? (
        <div>
          <h2>{`Welcome, ${user.username}!`}</h2>
          <Link to='/play' className="play-button">Play Now</Link>
        </div>
      ) : (
        <div>
        <Link to='/play' className="play-button">Play Now</Link>
        <p>Please log in to play the game.</p>
        </div>
      )}
    </div>
  );
}

export default Home;
