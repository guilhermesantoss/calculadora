import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Display } from '../components/Display';
import { ContainerCalulator } from './styles';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export function Calculator() {
  const [displayValue, setDisplayValue] = useState(initialState.displayValue);
  const [clearDisplay, setClearDisplay] = useState(initialState.clearDisplay);
  const [operation, setOperation] = useState<string | null>(
    initialState.operation,
  );
  const [values, setValues] = useState(initialState.values);
  const [current, setCurrent] = useState(initialState.current);

  function clearMemory() {
    setDisplayValue(initialState.displayValue);
    setClearDisplay(initialState.clearDisplay);
    setOperation(initialState.operation);
    setValues(initialState.values);
    setCurrent(initialState.current);
  }

  function setOperationCalculator(op: string): void {
    if (current === 0) {
      setOperation(op);
      setCurrent(1);
      setClearDisplay(true);
    } else {
      const equals = op === '=';
      const currentOperation = operation;
      let result = 0;

      const valuesData = [...values];

      switch (currentOperation) {
        case '+':
          result = valuesData[0] + valuesData[1];
          break;
        case '-':
          result = valuesData[0] - valuesData[1];
          break;
        case '*':
          result = valuesData[0] * valuesData[1];
          break;
        case '/':
          result = valuesData[0] / valuesData[1];
          break;
        default:
          result = values[0];
      }

      setDisplayValue(result.toString());
      setOperation(equals ? null : op);
      setCurrent(equals ? 0 : 1);
      setClearDisplay(!equals);
      setValues([result, 0]);
    }
  }

  function addDigit(n: string): void {
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
    <ContainerCalulator>
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
    </ContainerCalulator>
  );
}
