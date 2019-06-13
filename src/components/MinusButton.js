import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const MinusButton = () => {
  const { handleFunction } = useContext(
    NumberContext
  );
  return (
    <button
      id="subtract"
      type="button"
      className="btn btn-outline-info"
      onClick={() => handleFunction('-')}
    >
      <i className="fas fa-minus" />
    </button>
  );
};

export default MinusButton;
