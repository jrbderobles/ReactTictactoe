import React, { FC, useState } from 'react'
import { Button } from 'react-bootstrap';

import Board from './Board';
import { SquareType } from './Square';

import '../index.css';

const calculateWinner = (squares: SquareType[]): SquareType => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

const Game: FC = () => {
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [stepNumber, setStepNumber] = useState<number>(0);
  const [history, setHistory] = useState<{squares: SquareType[]}[]>([{
    squares: Array(9).fill(null)
  }]);

  const handleClick = (i: number): void => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();
    
    if (calculateWinner(squares) || squares[i]) return;

    squares[i] = xIsNext ? 'X' : 'O';

    setHistory(newHistory.concat([{
      squares: squares
    }]));
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step: number): void => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  };

  const handleNewGame = () => {
    setXIsNext(true);
    setStepNumber(0);
    setHistory([{
      squares: Array(9).fill(null)
    }]);
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li key={move}>
        <Button className='game-info-btn' onClick={() => jumpTo(move)}>{desc}</Button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else if (!current.squares.includes(null)) {
    status = 'It\'s a tie!';
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div className='game'>
      <div className='game-board'>
        <Board
          squares={current.squares}
          onClick={i => handleClick(i)}
        />
      </div>
      <div className='game-info'>
        <div>{status}</div>
        <Button className='game-info-btn' onClick={handleNewGame}>New Game</Button>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game;