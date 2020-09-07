import React, { useContext, useEffect } from 'react';
import { StateContext, DispatchContext } from '../context/context';

export const MaxScore: React.FunctionComponent = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const { gameOver, maxScore } = state;

  useEffect((): any => {
    if (maxScore.length)
      dispatch({
        type: 'changeValue',
        name: 'maxScore',
        payload: localStorage.getItem('maxScore'),
      });
  });

  return (
    <>{!gameOver && <p className='high-score'>High Score: {maxScore} </p>}</>
  );
};
