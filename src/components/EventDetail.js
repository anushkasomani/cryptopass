import React, { useState, useEffect } from 'react';
import concert from '../images/concert.jpg';  


const EventDetail = ({ bandname, banddescription, eventdtv, contract, eventId }) => {
  const [totalTickets, setTotalTickets] = useState(0);
  const [ticketsSold, setTicketsSold] = useState(0);
  const [ticketTypes, setTicketTypes] = useState([]);
  const [ticketCount, setTicketCount] = useState(1); 
 

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        
        const event = await contract.events(eventId);
        setTotalTickets(event.maxTickets);
        setTicketsSold(event.ticketsSold);
        setTicketTypes([event.ticketType]);  
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    };

    if (contract) {
      fetchEventDetails();
    }
  }, [contract, eventId]);

  const handleBuyNow = async () => {
    try {
      // Add wallet interaction logic here for purchasing tickets
      console.log(`Purchasing ${ticketCount} tickets...`);
    } catch (error) {
      console.error("Error purchasing tickets:", error);
    }
  };

  return (
    <div>
     
      <div style={{ position: 'relative', height: '50vh', overflow: 'hidden', borderRadius: '10px' }}>
        <img 
          src={concert} 
          alt="Concert" 
          className="App-img" 
          id="App-img" 
          style={{ 
            width: 'auto', 
            height: '100%', 
            display: 'block', 
            opacity: 0.5, 
            transition: 'transform 0.5s ease' 
          }} 
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')} 
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
      </div>

     
      <div className='date-time-venue'>
        <div>{eventdtv}</div>
      </div>

      
      <div className='artist-details'>
        <h2>{bandname}</h2>
        <p>{banddescription}</p>
      </div>

      
      <div className='ticket-info'>
        <p>Total Tickets: {totalTickets}</p>
        <p>Tickets Sold: {ticketsSold}</p>
        <p>Ticket Types: {ticketTypes.join(', ')}</p>
      </div>

      
      <div className='buy-tickets'>
        <label>
          Number of Tickets:
          <input 
            type="number" 
            min="1" 
            max={totalTickets - ticketsSold} 
            value={ticketCount} 
            onChange={(e) => setTicketCount(e.target.value)} 
          />
        </label>
        <button onClick={handleBuyNow}>Buy Now</button>
      </div>
    </div>
  );
};

export default EventDetail;
