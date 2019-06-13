import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const ZeroButton = ({ buttonValue, id }) => {
  const { handleDisplayValue } = useContext(
    NumberContext
  );
  return (
    <button
      id={id}
      type="button"
      className="btn btn-info btnzero"
      onClick={() =>
        handleDisplayValue(buttonValue)
      }
    >
      {buttonValue}
    </button>
  );
};

export default ZeroButton;
