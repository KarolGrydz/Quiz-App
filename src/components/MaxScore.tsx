import React, { useContext, useEffect, useState } from 'react';
import { StateContext, DispatchContext } from '../context/context';

export const MaxScore: React.FunctionComponent = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const { gameOver, maxScore } = state;
  const [maxScoreLocalStorage, setDatemaxScoreLocalStorage] = useState(
    localStorage.getItem('maxScore' || 0)
  );

  useEffect((): any => {
    setDatemaxScoreLocalStorage(localStorage.getItem('maxScore'));
    dispatch({
      type: 'changeValue',
      name: 'maxScore',
      payload: localStorage.getItem('maxScore'),
    });
  }, []);

  return (
    <>
      {console.log(maxScore)}
      {!gameOver && (
        <p className='high-score'>
          High Score:{' '}
          {maxScoreLocalStorage
            ? maxScoreLocalStorage > maxScore
              ? maxScoreLocalStorage
              : maxScore
            : maxScore}{' '}
        </p>
      )}
    </>
  );
};
