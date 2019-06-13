import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
const PlusButton = () => {
  const { handleFunction } = useContext(
    NumberContext
  );
  return (
    <button
      id="add"
      type="button"
      className="btn btn-outline-info"
      onClick={() => handleFunction('+')}
    >
      <i className="fas fa-plus" />
    </button>
  );
};

export default PlusButton;
