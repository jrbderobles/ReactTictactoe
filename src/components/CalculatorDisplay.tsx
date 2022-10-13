import React, { FC } from 'react'

import '../Applications/Calculator.css';

interface CalculatorDisplayProps {
  evaluatedExpression: number,
  expression: string
}

const CalculatorDisplay: FC<CalculatorDisplayProps> = ({ evaluatedExpression, expression }) => {
  return (
    <div className='calculator-display'>
      <p>
        <span className='evaluated-expression'>({evaluatedExpression})</span>&nbsp;
        <span className='expression'>{expression}</span>
      </p>
    </div>
  );
}

export default CalculatorDisplay;