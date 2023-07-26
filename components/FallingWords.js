import React, { useState, useEffect, useRef } from 'react';

//const wordsList = ['apple', 'banana', 'orange', 'grapes', 'kiwi'];
const wordsList = [
  // Emo Bands
  'Jimmy Eat World',
  'Dashboard Confessional',
  'Brand New',
  'Sunny Day Real Estate',
  'The Get Up Kids',
  'Taking Back Sunday',
  'Thursday',
  'The Promise Ring',
  'Mineral',
  'American Football',
  'The Juliana Theory',
  'Braid',
  'Moss Icon',
  'Texas Is the Reason',
  'Saves the Day',
  'Cap n Jazz',
  'Rites of Spring',
  'Sunny Day Real Estate',
  'The World Is a Beautiful Place & I Am No Longer Afraid to Die',
  'Rainer Maria',

  // Punk Bands
  'Green Day',
  'The Offspring',
  'Rancid',
  'Bad Religion',
  'NOFX',
  'The Vandals',
  'Pennywise',
  'Social Distortion',
  'Anti-Flag',
  'Lagwagon',
  'The Bouncing Souls',
  'Descendents',
  'NOFX',
  'Dropkick Murphys',
  'The Casualties',
  'The Distillers',
  'Bad Brains',
  'Black Flag',
  'The Clash',
  'Ramones',

  // Ska Bands
  'The Mighty Mighty Bosstones',
  'Reel Big Fish',
  'Less Than Jake',
  'Streetlight Manifesto',
  'Operation Ivy',
  'Sublime',
  'Mad Caddies',
  'Catch 22',
  'The Aquabats',
  'Goldfinger',
  'Skankin Pickle',
  'The Specials',
  'Toots and the Maytals',
  'The Selecter',
  'Mustard Plug',
  'The Pietasters',
  'Big D and the Kids Table',
  'Fishbone',
  'Save Ferris',
  'The Slackers',
];

const FallingWords = () => {
  const [words, setWords] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [totalWords, setTotalWords] = useState(0);
  const [correctWords, setCorrectWords] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomWord =
        wordsList[Math.floor(Math.random() * wordsList.length)].toLowerCase();
      setWords([randomWord]);
      setUserInput('');
      setTotalWords((total) => total + 1); // Increment total words counter
    }, 5000); // Generate a new word every 5 seconds

    inputRef.current.focus();

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const typedWord = e.target.value;
    const currentWord = words[0];

    if (currentWord === typedWord) {
      // Whole word is typed correctly, remove the word and increment correct words counter
      setWords([]);
      setUserInput('');
      setCorrectWords((count) => count + 1);
    } else {
      setUserInput(typedWord);
    }
  };

  const renderWord = () => {
    const currentWord = words[0];
    if (!currentWord) return null;

    const letters = currentWord.split('');

    return letters.map((letter, index) => {
      if (index < userInput.length) {
        const isCorrect = letter === userInput[index];
        return (
          <span key={index} className={isCorrect ? 'correct' : 'untyped'}>
            {letter}
          </span>
        );
      } else {
        return (
          <span key={index} className="untyped">
            {letter}
          </span>
        );
      }
    });
  };

  return (
    <>
      <div className="flex ... ">
        <a className="w-1/4">
          <h2>Total Words: {totalWords}</h2>
        </a>
        <a className="w-1/4">
          <h1>Correct Words: {correctWords}</h1>
        </a>
      </div>
      <div className="box prose lg:prose-l">
        <span className="falling-word">
          <h2>{renderWord()}</h2>
        </span>
        <input
          ref={inputRef}
          type="text"
          className="hidden-text-box"
          value={userInput}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default FallingWords;
