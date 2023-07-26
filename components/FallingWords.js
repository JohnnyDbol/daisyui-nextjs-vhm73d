import React, { useState, useEffect, useRef } from 'react';

const wordsList = ['apple', 'banana', 'orange', 'grapes', 'kiwi'];

const FallingWords = () => {
  const [words, setWords] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [totalWords, setTotalWords] = useState(0);
  const [correctWords, setCorrectWords] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomWord =
        wordsList[Math.floor(Math.random() * wordsList.length)];
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
      <div className="navbar bg-base-100">
        <a className="navbar-start">
          <h2>Total Words: {totalWords}</h2>
        </a>
        <a className="navbar-end">
          <h1>Correct Words: {correctWords}</h1>
        </a>
      </div>
      <div className="box">
        <span className="falling-word">{renderWord()}</span>
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
