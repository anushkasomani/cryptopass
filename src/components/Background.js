import React from 'react';
import concert from '../images/1.jpg';

const Background = () => {
  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden'}}>
      <img 
        src={concert} 
        alt="Concert" 
        className="App-img" 
        id="App-img" 
        style={{ 
          width: '100%', 
          height: '100%', 
          display: 'block', 
          opacity: 0.5, 
          transition: 'transform 0.5s ease' 
        }} 
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')} 
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      />
      <h1 style={{ 
        position: 'absolute', 
        top: '30%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        color: 'white', 
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', 
        zIndex: 1,
        textAlign: 'center', 
        fontSize: '3.9rem'
      }}>
        CryptoPass
      </h1>
      <button 
        style={{ 
          position: 'absolute', 
          bottom: '20%',
          left: '50%', 
          transform: 'translateX(-50%)', 
          padding: '10px 20px', 
          fontSize: '1.2rem', 
          backgroundColor: 'rgba(255, 255, 255, 0.8)', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer', 
          zIndex: 1 
        }}
        onClick={() => alert('Explore Events Clicked!')} 
      >
        Explore Events
      </button>
    </div>
  );
}

export default Background;
