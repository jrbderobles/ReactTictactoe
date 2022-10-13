import React, { FC, ReactNode, useState } from 'react'
import { evaluate } from 'mathjs';

import CalculatorDisplay from '../components/CalculatorDisplay';
import CalculatorOperatorOrOperand from '../components/CalculatorOperatorOrOperand';

const Calculator: FC = () => {
  const [expression, setExpression] = useState<string>('0');
  const [evaluatedExpression, setEvaluatedExpression] = useState<number>(0);

  const onNumberOrOperationClick = (i: string): void => {
    if (i === 'DEL') {
      setExpression('0');
      setEvaluatedExpression(0);
      return;
    }

    if (expression === '0') {
      setExpression(i);
      if (!isNaN(parseInt(i))) setEvaluatedExpression(parseInt(i));
      return;
    }

    const expressonRegex = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/
    let isValidExpression: boolean;

    if (i === '=') {
      isValidExpression = expressonRegex.test(expression);
      if (isValidExpression) {
        setExpression(evaluate(expression));
      } else {
        alert('Mathematical expression is invalid!');
      }

      return;
    }

    isValidExpression = expressonRegex.test(expression + i);
    if (isValidExpression) setEvaluatedExpression(evaluate(expression + i));
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
        <CalculatorDisplay evaluatedExpression={evaluatedExpression} expression={expression} />
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