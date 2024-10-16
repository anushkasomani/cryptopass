import React from 'react';
import Card from './Card';

const MainContent = () => {
  return (
    <div 
      style={{
        margin: '50px', 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-around',
      }}
    >
      <Card 
        title="Concert Event"
        image="concert.jpg"
        description="Join us for an unforgettable night of live music!"
        buttonText="Buy Ticket"
        onButtonClick={() => alert('Button Clicked!')}
      />

      <Card 
        title="Concert Event"
        image="concert.jpg"
        description="Join us for an unforgettable night of live music!"
        buttonText="Buy Ticket"
        onButtonClick={() => alert('Button Clicked!')}
      />

      <Card 
        title="Concert Event"
        image="concert.jpg"
        description="Join us for an unforgettable night of live music!"
        buttonText="Buy Ticket"
        onButtonClick={() => alert('Button Clicked!')}
      />
    </div>
  );
}

export default MainContent;
