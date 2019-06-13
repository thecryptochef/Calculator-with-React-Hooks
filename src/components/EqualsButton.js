import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const EqualsButton = () => {
  const { doMath } = useContext(
    NumberContext
  );
  return (
    <button
      id="equals"
      type="button"
      className="btn btn-success equal-sign"
      onClick={() => doMath()}
      value="="
    >
      =
    </button>
  );
};

export default EqualsButton;
