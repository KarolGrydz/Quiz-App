import React, { useContext } from 'react';
import { StateContext, DispatchContext } from '../context/context';

export const QuestionNumberButton = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const { TOTAL_QUESTIONS, gameOver } = state;

  const changeValue = (e: any) => {
    console.log(e.target.value);
    dispatch({
      type: 'changeValue',
      name: 'TOTAL_QUESTIONS',
      payload: e.target.value,
    });
  };

  return (
    <>
      {gameOver && (
        <>
          <h2>Select number of questions</h2>
          <input
            type='number'
            min='10'
            max='50'
            className='start'
            defaultValue={TOTAL_QUESTIONS}
            onChange={changeValue}
          />
        </>
      )}
    </>
  );
};
