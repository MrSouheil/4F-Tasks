import React, { useState } from 'react';

const Square = ({ onClick, isBlue }) => {
  const squareStyle = {
    width: '30px',
    height: '30px',
    backgroundColor: isBlue ? 'blue' : 'green',
    cursor: 'pointer',
    border: '1px solid white',
  };

  return <div style={squareStyle} onClick={onClick}></div>;
};

const GridOfSquares = ({ gridSize }) => {
  const [squareColors, setSquareColors] = useState(
    Array.from({ length: gridSize * gridSize }, () => false)
  );

  const handleSquareClick = (index) => {
    setSquareColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[index] = !newColors[index];
      return newColors;
    });
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${gridSize}, 30px)`,
    gridTemplateRows: `repeat(${gridSize}, 30px)`,
    gap: '2px',
  };

  return (
    <div style={gridStyle}>
      {squareColors.map((isBlue, index) => (
        <Square
          key={index}
          onClick={() => handleSquareClick(index)}
          isBlue={isBlue}
        />
      ))}
      <hr></hr>
    </div>
  );
};

export default GridOfSquares;
