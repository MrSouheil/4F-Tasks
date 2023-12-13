import React, { useState } from 'react';

const Square = () => {
  const [isRed, setIsRed] = useState(false);

  const handleClick = () => {
    setIsRed((prevIsRed) => !prevIsRed);
  };

  const squareStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: isRed ? 'red' : 'gray',
    cursor: 'pointer',
    marginBottom: '20px'
  };

  return <div style={squareStyle} onClick={handleClick}></div>;
};

export default Square;