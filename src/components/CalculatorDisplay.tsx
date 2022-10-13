import React, { FC } from 'react'

import '../Applications/Calculator.css';

interface CalculatorDisplayProps {
  value: string
}

const CalculatorDisplay: FC<CalculatorDisplayProps> = ({ value }) => {
  return (
    <div className='calculator-display'>
      <p>{value}</p>
    </div>
  );
}

export default CalculatorDisplay;