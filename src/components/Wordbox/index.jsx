import React, { useState,useEffect } from 'react';
import './style.css';

const Wordbox = ({ word, onFinish }) => {
  const [lettersLeft, setLettersLeft] = useState(word);  

  const handleKeyUp = (e) => {
    if (e.code[3].toLowerCase() === lettersLeft[0]) {
      setLettersLeft(lettersLeft.slice(1));
    }
    else if(lettersLeft.lenght === 1) {
      onFinish()
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);
    return () => document.removeEventListener('keyup', handleKeyUp);
  }, [lettersLeft]);
  
  return (
    <div className="wordbox">{lettersLeft}</div>
  );
};

export default Wordbox;
