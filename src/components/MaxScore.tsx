import React, { useContext, useEffect } from 'react';
import { StateContext } from '../context/context';

export const MaxScore: React.FunctionComponent = () => {
  const state = useContext(StateContext);
  const { gameOver } = state;
  let { maxScore } = state;

  useEffect((): any => {
    if (localStorage) maxScore = localStorage.getItem('maxScore');
  }, [maxScore]);

  return (
    <>{!gameOver && <p className="high-score">High Score: {maxScore} </p>}</>
  );
};
