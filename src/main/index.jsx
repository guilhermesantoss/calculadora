import React, { useState } from 'react';
import './styles.css';

import Button from '../components/Button';
import Display from '../components/Display'

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [clearDisplay, setClearDisplay] = useState(false);
  const [operation, setOperation] = useState(null);
  const [values, setValues] = useState([0, 0]);
  const [current, setCurrent] = useState(0);

  function clearMemory() {
    setDisplayValue('0');
    setClearDisplay(false);
    setOperation(null);
    setValues([0, 0]);
    setCurrent(0);
  }

  function setOperationCalculator(op) {
    if (current === 0) {
      setOperation(op);
      setCurrent(1);
      setClearDisplay(true);
    } else {
      const equals = op === '=';
      const currentOperation = operation;

      const valuesData = [...values];
      
      switch(currentOperation) {
        case '+':
          valuesData[0] = valuesData[0] + valuesData[1];
          break;
        case '-':
          valuesData[0] = valuesData[0] - valuesData[1];
          break;
        case '*':
          valuesData[0] = valuesData[0] * valuesData[1];
          break;
        case '/':
          valuesData[0] = valuesData[0] / valuesData[1];
            break;
        default: 
          valuesData[0] = values[0];
      }

      setDisplayValue(valuesData[0]);
      setOperation(equals ? null : op);
      setCurrent(equals ? 0 : 1);
      setClearDisplay(!equals);
      setValues(valuesData);
    }
  }

  function addDigit(n) {
    if (n === '.' && displayValue.includes('.')) {
      return;
    }

    const clearDisplayVar = displayValue === '0' || clearDisplay;
    const currentValue = clearDisplayVar ? '' : displayValue;
    const displayValueVar = currentValue + n;
    setDisplayValue(displayValueVar);
    setClearDisplay(false);

    if (n !== '.') {
      const i = current;
      const newValue = parseFloat(displayValueVar);
      const valuesData = [...values];
      valuesData[i] = newValue;
      setValues(valuesData);
    }
  }
  
  return (
    <div className="calculator">
      <Display value={displayValue} />
      <Button label="AC" click={clearMemory} triple />
      <Button label="/" click={setOperationCalculator} operation />
      <Button label="7" click={addDigit} />
      <Button label="8" click={addDigit} />
      <Button label="9" click={addDigit} />
      <Button label="*" click={setOperationCalculator} operation />
      <Button label="4" click={addDigit} />
      <Button label="5" click={addDigit} />
      <Button label="6" click={addDigit} />
      <Button label="-" click={setOperationCalculator} operation />
      <Button label="1" click={addDigit} />
      <Button label="2" click={addDigit} />
      <Button label="3" click={addDigit} />
      <Button label="+" click={setOperationCalculator} operation />
      <Button label="0" click={addDigit} double />
      <Button label="." click={addDigit} />
      <Button label="=" click={setOperationCalculator} operation />
    </div>
  );
}

export default Calculator;