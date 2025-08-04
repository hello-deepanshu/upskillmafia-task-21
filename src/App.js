import React from 'react';
import Card from './Card';
import './App.css';

const cardData = [
  { id: 1, title: "Card 1", description: "This is card 1 description", image: "https://picsum.photos/100?random=1" },
  { id: 2, title: "Card 2", description: "This is card 2 description", image: "https://picsum.photos/100?random=2" },
  { id: 3, title: "Card 3", description: "This is card 3 description", image: "https://picsum.photos/100?random=3" },
  { id: 4, title: "Card 4", description: "This is card 4 description", image: "https://picsum.photos/100?random=4" },
  { id: 5, title: "Card 5", description: "This is card 5 description", image: "https://picsum.photos/100?random=5" },
  { id: 6, title: "Card 6", description: "This is card 6 description", image: "https://picsum.photos/100?random=6" },
  { id: 7, title: "Card 7", description: "This is card 7 description", image: "https://picsum.photos/100?random=7" },
  { id: 8, title: "Card 8", description: "This is card 8 description", image: "https://picsum.photos/100?random=8" },
  { id: 9, title: "Card 9", description: "This is card 9 description", image: "https://picsum.photos/100?random=9" },
  { id: 10, title: "Card 10", description: "This is card 10 description", image: "https://picsum.photos/100?random=10" },
  { id: 11, title: "Card 11", description: "This is card 11 description", image: "https://picsum.photos/100?random=11" },
  { id: 12, title: "Card 12", description: "This is card 12 description", image: "https://picsum.photos/100?random=12" },
  { id: 13, title: "Card 13", description: "This is card 13 description", image: "https://picsum.photos/100?random=13" },
  { id: 14, title: "Card 14", description: "This is card 14 description", image: "https://picsum.photos/100?random=14" },
  { id: 15, title: "Card 15", description: "This is card 15 description", image: "https://picsum.photos/100?random=15" },
  { id: 16, title: "Card 16", description: "This is card 16 description", image: "https://picsum.photos/100?random=16" },
  { id: 17, title: "Card 17", description: "This is card 17 description", image: "https://picsum.photos/100?random=17" },
  { id: 18, title: "Card 18", description: "This is card 18 description", image: "https://picsum.photos/100?random=18" },
  { id: 19, title: "Card 19", description: "This is card 19 description", image: "https://picsum.photos/100?random=19" },
  { id: 20, title: "Card 20", description: "This is card 20 description", image: "https://picsum.photos/100?random=20" }
];

function App() {
  return (
    <div className="app-container">
      <h2>All the cards are here.</h2>
      <div className="card-grid">
        {cardData.map(card => (
          <Card key={card.id} title={card.title} description={card.description} image={card.image} />
        ))}
      </div>
    </div>
  );
}

export default App;
