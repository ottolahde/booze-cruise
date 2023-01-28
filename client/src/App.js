import React, { useState } from 'react';
import './App.css';
import Dice from 'react-dice-roll';
import daddy from './daddy.mp3';

function App() {

  const [items, setItems] = useState([
    "Would you rather only fuck until you're dead or only fuck the dead?", 
    "Drink if you were born in May, August, or September.", 
    "Your favorite alcoholic drink.", 
    "Draw a heart with a smiley face anywhere.", 
    "Play a song. Everyone who doesn't know it has to take a shot.", 
    "Hum a song.", 
    "Go hide.", 
    "Find two smiley faces from the game board.", 
    "Whoever first finds a green element in the apartment orders someone to take a shot.", 
    "Whisper or speak another language for one round.", 
    "What would you eradicate from the world?", 
    "Pour some of your drink into someone else's glass.", 
    "Eat anything.", 
    "Take off a piece of clothing.", 
    "Reverse: go backwards the number shown on the dice on the next round.", 
    "Ask a trivia question to a friend.", 
    "Ask a friend a question, if they answer correctly, they are safe, if not, they take a shot.", 
    "Do 10 push-ups. If you can't, drink 4 sips.", 
    "You will drink an extra sip every time someone hits a pink square on the board.", 
    "Drink only water for the next round.", 
    "Get soap. You have 10 seconds.", 
    "Who has the nicest outfit?", 
    "End the game or drink 2 shots.", 
    "Drink your glass empty.", 
    "Dance for 30 seconds.", 
    "Post a story.", 
    "Bank balance.", 
    "Favorite celebrity.", 
    "Blindfold.", 
    "Best hookup/experience.", 
    "Last message.", 
    "Instagram search.", 
    "Last hookup.", 
    "Compliment a friend.", 
    "Red flag.", 
    "Get a new person's phone number.", 
    "Show crush from Instagram.", 
    "Oddest sex story.", 
    "Call a relative.", 
    "Biggest insecurity.", 
    "Favorite trait in oneself.", 
    "Joke.", 
    "Group photo.", 
    "Everyone can ask a question.", 
    "Turn on and turn off.", 
    "Phobias.", 
    "Whisper/speak with an accent."
  ]);

  const [currentItem, setCurrentItem] = useState('Rabies cards');
  const [displayedItems, setDisplayedItems] = useState(new Set());

  const handleButtonClick = () => {
    if (items.length === 0) {
      console.log("Lista käyty läpi, sekoitetaan ...")
        setItems([
          "Would you rather only fuck until you're dead or only fuck the dead?", 
    "Drink if you were born in May, August, or September.", 
    "Your favorite alcoholic drink.", 
    "Draw a heart with a smiley face anywhere.", 
    "Play a song. Everyone who doesn't know it has to take a shot.", 
    "Hum a song.", 
    "Go hide.", 
    "Find two smiley faces from the game board.", 
    "Whoever first finds a green element in the apartment orders someone to take a shot.", 
    "Whisper or speak another language for one round.", 
    "What would you eradicate from the world?", 
    "Pour some of your drink into someone else's glass.", 
    "Eat anything.", 
    "Take off a piece of clothing.", 
    "Reverse: go backwards the number shown on the dice on the next round.", 
    "Ask a trivia question to a friend.", 
    "Ask a friend a question, if they answer correctly, they are safe, if not, they take a shot.", 
    "Do 10 push-ups. If you can't, drink 4 sips.", 
    "You will drink an extra sip every time someone hits a pink square on the board.", 
    "Drink only water for the next round.", 
    "Get soap. You have 10 seconds.", 
    "Who has the nicest outfit?", 
    "End the game or drink 2 shots.", 
    "Drink your glass empty.", 
    "Dance for 30 seconds.", 
    "Post a story.", 
    "Bank balance.", 
    "Favorite celebrity.", 
    "Blindfold.", 
    "Best hookup/experience.", 
    "Last message.", 
    "Instagram search.", 
    "Last hookup.", 
    "Compliment a friend.", 
    "Red flag.", 
    "Get a new person's phone number.", 
    "Show crush from Instagram.", 
    "Oddest sex story.", 
    "Call a relative.", 
    "Biggest insecurity.", 
    "Favorite trait in oneself.", 
    "Joke.", 
    "Group photo.", 
    "Everyone can ask a question.", 
    "Turn on and turn off.", 
    "Phobias.", 
    "Whisper/speak with an accent."
        ]);
        setDisplayedItems(new Set());
        setCurrentItem(null);
    } else {
        const randomIndex = Math.floor(Math.random() * items.length);
        const randomItem = items[randomIndex];
        if (!displayedItems.has(randomItem)) {
            setCurrentItem(randomItem);
            setDisplayedItems(new Set([...displayedItems, randomItem]));
            setItems(items.filter((item, index) => index !== randomIndex));
        }else{
            handleButtonClick()
        }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="dice-container">
          <Dice onRoll={(value) => console.log(value)} size={100} rollingTime={2000} sound={daddy} />
        </div>

        <div className="rabies-container">
          <p>{currentItem}</p>
          <button className="my-button" onClick={handleButtonClick}>Next card</button>
        </div>
      </header>
    </div>
  );
}

export default App;
