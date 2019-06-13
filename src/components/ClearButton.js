import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
const ClearButton = () => {
  const { handleClearValue } = useContext(
    NumberContext
  );
  return (
    <button
      id="clear"
      type="button"
      className="btn btn-danger"
      onClick={() => handleClearValue()}
    >
      AC
    </button>
  );
};

export default ClearButton;
