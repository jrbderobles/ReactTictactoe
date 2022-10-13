import React, { FC, ReactNode, useState } from 'react'
import { evaluate } from 'mathjs';

import CalculatorDisplay from '../components/CalculatorDisplay';
import CalculatorOperatorOrOperand from '../components/CalculatorOperatorOrOperand';

const Calculator: FC = () => {
  const [expression, setExpression] = useState<string>('0');
  const [history, setHistory] = useState<{ values: boolean[] }[]>([{
    values: Array(17).fill(false)
  }]);

  const onNumberOrOperationClick = (i: string): void => {
    if (i === 'DEL') {
      setExpression('0');
      return;
    }

    if (expression === '0') {
      setExpression(i);
      return;
    }

    if (i === '=') {
      const expressonRegex = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/

      if (expressonRegex.test(expression)) {
        setExpression(evaluate(expression));
      } else {
        alert('Mathematical expression is invalid!');
      }

      return;
    }

    setExpression(expression + i);
  };

  const renderOperatorOrOperand = (i: string, additionalClassNames?: string): ReactNode => {
    return (
      <CalculatorOperatorOrOperand
        additionalClassNames={additionalClassNames}
        onClick={() => onNumberOrOperationClick(i)}
        value={i}
      />
    );
  }

  return (
    <div>
      <div className='calculator-row calculator-top-edge'>
        <CalculatorDisplay value={expression} />
      </div>
      <div className='calculator-row'>
        {renderOperatorOrOperand('/', 'calculator-operation')}
        {renderOperatorOrOperand('*', 'calculator-operation')}
        {renderOperatorOrOperand('-', 'calculator-operation')}
        {renderOperatorOrOperand('+', 'calculator-operation')}
        {renderOperatorOrOperand('DEL', 'calculator-operation')}
      </div>
      <div className='calculator-row'>
        {renderOperatorOrOperand('1', 'calculator-number')}
        {renderOperatorOrOperand('2', 'calculator-number')}
        {renderOperatorOrOperand('3', 'calculator-number')}
      </div>
      <div className='calculator-row'>
        {renderOperatorOrOperand('4', 'calculator-number')}
        {renderOperatorOrOperand('5', 'calculator-number')}
        {renderOperatorOrOperand('6', 'calculator-number')}
      </div>
      <div className='calculator-row'>
        {renderOperatorOrOperand('7', 'calculator-number')}
        {renderOperatorOrOperand('8', 'calculator-number')}
        {renderOperatorOrOperand('9', 'calculator-number')}
      </div>
      <div className='calculator-row'>
        {renderOperatorOrOperand('0', 'calculator-number calculator-bottom-left')}
        {renderOperatorOrOperand('.', 'calculator-number')}
        {renderOperatorOrOperand('=', 'calculator-number calculator-bottom-right')}
      </div>
    </div>
  );
}

export default Calculator;