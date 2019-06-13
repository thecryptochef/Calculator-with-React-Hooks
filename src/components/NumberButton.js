import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
const NumberButton = ({
  buttonValue,
  id
}) => {
  const { handleDisplayValue } = useContext(
    NumberContext
  );
  return (
    <button
      id={id}
      type="button"
      className="btn btn-primary"
      onClick={() =>
        handleDisplayValue(buttonValue)
      }
    >
      {buttonValue}
    </button>
  );
};

export default NumberButton;
