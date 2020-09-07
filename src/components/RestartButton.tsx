import React, { useContext } from 'react';
import { StateContext } from '../context/context';

export const RestartButton: React.FunctionComponent = () => {
  const state = useContext(StateContext);
  const { end, errorHandler } = state;

  const resetGame = (): void => window.location.reload(false);

  return (
    <>
      {errorHandler || end ? (
        <button className='next' onClick={resetGame}>
          Restar Game
        </button>
      ) : null}
    </>
  );
};
