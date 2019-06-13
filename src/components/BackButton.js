import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const BackButton = () => {
  const { handleBackButton } = useContext(
    NumberContext
  );
  return (
    <button
      type="button"
      className="btn btn-warning"
      onClick={() => handleBackButton()}
    >
      <i
        style={{
          color: '#252A2A'
        }}
        className="fas fa-backspace"
      />
    </button>
  );
};

export default BackButton;
