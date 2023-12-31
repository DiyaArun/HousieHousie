import React, { useState } from 'react';
import './Board.css';

const Board = () => {
  const numberPhrases = [
    "Top of the house number 1", "Kaala dhan", "Goodness Me", "Knock at the door", "Symbol of congress", "Super sixer", "Colours of rainbow", "Big fat lady number 8", "Number of planets in solar system number 9", "A big fat hen", 
    "1 and 1 eleven", "One dozen", "Unlucky for some lucky for me no. thirteen", "Valentine Day", "Yet to be kissed", "Sweet sixteen", "Dancing Queen", "Voting age", "End of the teens", "Blind 20", 
    "President salute", "Two little ducks", "You and me", "Two dozen", "Silver Jublee Number", "Republic Day", "Gateway to heaven", "Duck and its mate", "In your prime", "Its middle Age", 
    "Time for fun", "Mouth Full", "All the 3s", "Dil mange more", "Flirty Husband", "Popular Number", "Mixed luck", "Oversize", "Watch your waistline", "Naughty 40", 
    "Life's begun at 41", "Quit India Movement", "Pain in the knee", "All the fours", "Halfway there", "Up to tricks", "Year of Independence", "Four dozen", "Rise and shine", "Half a century, Golden Jublee",
    "Charity begins at 51", "Pack of cards", "Pack with a joker", "Pack with two jokers", "All the fives", "Pick up sticks", "Mutiny Year", "Time to retire", "Just retired", "Five dozen", 
    "Bakers bun", "Click the two", "Click the three", "Catch the chor", "Old age pension", "Chakke pe chakka", "Made in heaven", "Saving grace", "Ulta Pulta", "Lucky blind",
    "Lucky bachelor", "Lucky couple", "A crutch and a flea", "Lucky chor", "Diamond Jublee", "Lucky six", "Two hockey sticks", "Heaven's gate", "lucky nine", "Gandhi's breakfast",
    "Corner shot", "Last of the two", "India wins Cricket World Cup", "Last of the chors", "Grandma", "Last six", "Grandpa", "Two fat ladies", "All but one", "Top of the house"
  ];

  const [numbers, setNumbers] = useState(Array.from({ length: 90 }, (_, index) => index + 1));
  const [calledNumbers, setCalledNumbers] = useState([]);
  const [currentNumber, setCurrentNumber] = useState(null);
  const [previousNumber, setPreviousNumber] = useState(null);

  const generateNumber = () => {
    if (numbers.length === 0) {
      alert('All numbers have been called!');
      return;
    }

    const randomIndex = Math.floor(Math.random() * numbers.length);
    const generatedNumber = numbers[randomIndex];
    const updatedNumbers = numbers.filter((number) => number !== generatedNumber);

    setCalledNumbers((prevCalledNumbers) => [...prevCalledNumbers, generatedNumber]);
    setCurrentNumber(generatedNumber);
    setPreviousNumber(currentNumber);
    setNumbers(updatedNumbers);
  };

  const getPhraseForNumber = (number) => {
    return numberPhrases[number - 1] || 'No Phrase';
  };

  const renderGrid = () => {
    const grid = [];
    for (let i = 1; i <= 90; i++) {
      grid.push(
        <div
          key={i}
          className={`housie-cell ${calledNumbers.includes(i) ? 'called' : ''}`}
        >
          <span className="housie-cell-number">{i}</span>
        </div>
      );
    }
    return grid;
  };

  return (
    <div className="housie-board">
      <div className="number-generator">
        <button onClick={generateNumber}>Generate Number</button>
        <div>
          Current Number: <span>{currentNumber || '-'}</span>
          <span className="housie-phrase">{getPhraseForNumber(currentNumber)}</span>
        </div>
        <div>
          Previous Number: <span>{previousNumber || '-'}</span>
          {/* <span className="housie-phrase">{getPhraseForNumber(previousNumber)}</span> */}
        </div>
      </div>
      <div className="housie-board-grid">{renderGrid()}</div>
    </div>
  );
};

export default Board;