import React from 'react';
import BackButton from './BackButton';
import ClearButton from './ClearButton';
import DivideButton from './DivideButton';
import TimesButton from './TimesButton';
import PlusButton from './PlusButton';
import NumberButton from './NumberButton';
import EqualsButton from './EqualsButton';
import ZeroButton from './ZeroButton';
import MinusButton from './MinusButton';
import Display from './Display';
import './style.css';

const Calculator = () => {
  return (
    <React.Fragment>
      <div className="container wrapper">
        <h1>Chef's Calculator</h1>
        <div className="display">
          <Display />
        </div>
        <div className="calculator-keys">
          <ClearButton />
          <BackButton />
          <DivideButton />
          <TimesButton />
          <NumberButton
            id={'seven'}
            buttonValue={7}
          />
          <NumberButton
            id="eight"
            buttonValue={8}
          />
          <NumberButton
            id="nine"
            buttonValue={9}
          />
          <MinusButton />
          <NumberButton
            id="four"
            buttonValue={4}
          />
          <NumberButton
            id="five"
            buttonValue={5}
          />
          <NumberButton
            id="six"
            buttonValue={6}
          />
          <PlusButton />
          <EqualsButton />

          <NumberButton
            id="one"
            buttonValue={1}
          />
          <NumberButton
            id="two"
            buttonValue={2}
          />
          <NumberButton
            id="three"
            buttonValue={3}
          />
          <ZeroButton
            id='zero'
            buttonValue={0}
          />
          <NumberButton
            id="decimal"
            buttonValue={'.'}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Calculator;
