import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const DivideButton = () => {
  const { handleFunction } = useContext(
    NumberContext
  );
  return (
    <button
      id="divide"
      type="button"
      className="btn btn-outline-info function"
      onClick={() => handleFunction('/')}
    >
      <i className="fas fa-divide" />
    </button>
  );
};

export default DivideButton;
