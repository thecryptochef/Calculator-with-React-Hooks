import React, { useState } from 'react';

export const NumberContext = React.createContext();

const NumberProvider = props => {
  const [number, setNumber] = useState('');
  const [
    storedNumber,
    setStoredNumber
  ] = useState('');
  const [
    functionType,
    setFunctionType
  ] = useState('');

  const handleDisplayValue = num => {
    if (
      (!number.includes('.') ||
        num !== '.') &&
      number.length < 8
    ) {
      setNumber(
        `${(number + num).replace(
          /^0+/,
          ''
        )}`
      );
    }
  };
  const handleStoredValue = () => {
    setStoredNumber(number);
    setNumber('');
  };

  const handleClearValue = () => {
    setNumber('');
    setStoredNumber('');
    setFunctionType('');
  };

  const handleBackButton = () => {
    if (number !== '') {
      const deletedNumber = number.slice(
        0,
        number.length - 1
      );
      setNumber(deletedNumber);
    }
  };

  const doMath = () => {
    if (number && storedNumber) {
      switch (functionType) {
        case '+':
          setStoredNumber(
            `${Math.round(
              `${(parseFloat(storedNumber) +
                parseFloat(number)) *
                1000}`
            ) / 1000}`
          );
          break;
        case '-':
          setStoredNumber(
            `${Math.round(
              `${(parseFloat(storedNumber) -
                parseFloat(number)) *
                10000}`
            ) / 10000}`
          );
          break;
        case '/':
          setStoredNumber(
            `${Math.round(
              `${(parseFloat(storedNumber) /
                parseFloat(number)) *
                10000}`
            ) / 10000}`
          );
          break;
        case '*':
          setStoredNumber(
            `${Math.round(
              `${parseFloat(storedNumber) *
                parseFloat(number) *
                10000}`
            ) / 10000}`
          );
          break;
        default:
          break;
      }
      setNumber('');
    }
  };

  const handleFunction = type => {
    if (number) {
      setFunctionType(type);
      handleStoredValue();
      doMath();
    }
    if (storedNumber) {
      setFunctionType(type);
    }
  };

  return (
    <NumberContext.Provider
      value={{
        handleDisplayValue,
        number,
        handleStoredValue,
        handleClearValue,
        handleFunction,
        storedNumber,
        setNumber,
        doMath,
        functionType,
        handleBackButton
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};
export default NumberProvider;
