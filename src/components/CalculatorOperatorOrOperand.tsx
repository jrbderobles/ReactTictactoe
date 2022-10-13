import React, { FC } from 'react'

import '../Applications/Calculator.css';

interface CalculatorOperatorOrOperand {
  additionalClassNames?: string;
  onClick(): void;
  value: string;
}

const CalculatorNumber: FC<CalculatorOperatorOrOperand> = ({ additionalClassNames, value, onClick }) => {
  return (
    <div
      className={additionalClassNames ? additionalClassNames: ''}
      onClick={onClick}
    >
      {value}
    </div>
  );
}

export default CalculatorNumber;