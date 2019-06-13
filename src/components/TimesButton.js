import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const TimesButton = () => {
  const { handleFunction } = useContext(
    NumberContext
  );
  return (
    <button
      id="multiply"
      type="button"
      className="btn btn-outline-info"
      onClick={() => handleFunction('*')}
    >
      <i className="fas fa-times" />
    </button>
  );
};

export default TimesButton;
