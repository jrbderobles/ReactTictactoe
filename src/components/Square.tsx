import { FC } from 'react';

import '../index.css';

export type SquareType = 'X' | 'O' | null;

interface SquareProps {
  onClick(): void;
  value: SquareType;
}

const Square: FC<SquareProps> = props => {
  return (
    <button className='square' onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;