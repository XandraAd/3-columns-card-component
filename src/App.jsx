/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import Card from './components/Card';



const cardData = [
  {
    logo:"../src/images/icon-sedans.svg" ,
    title: "SEDANS",
    description: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    bg:" hsl(31, 77%, 52%)"
   
  },
  {
    logo:"../src/images/icon-suvs.svg",
    title: "SUVS",
    description: "Take an SUV for its spacious interior, power, and versatility. Perfect for your family vacation and off-road adventures.",
    bg:"hsl(184, 100%, 22%)"
    
  },
  {
    logo: "../src/images/icon-luxury.svg",
    title: "LUXURY",
    description: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    bg:"hsl(179, 100%, 13%)"
 
  },
];

function App() {
  return (
    <div className='cardInfo'>
      {cardData.map((card, index) => (
        <Card
          key={index}
          logo={card.logo}
          title={card.title}
          description={card.description}
          background={card.bg}
          
         
        />
      ))}
      
    </div>
  );
}

export default App;

