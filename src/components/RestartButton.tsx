import React, { useContext } from 'react';
import { StateContext } from '../context/context';

export const RestartButton: React.FunctionComponent = () => {
  const state = useContext(StateContext);
  const { TOTAL_QUESTIONS, gameOver, number } = state;

  const resetGame = (): void => window.location.reload(false);

  return (
    <>
      {gameOver && number + 1 === TOTAL_QUESTIONS && (
        <button className='next' onClick={resetGame}>
          Restar Game
        </button>
      )}
    </>
  );
};
