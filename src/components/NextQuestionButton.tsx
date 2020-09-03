import React, { useContext } from 'react';
import { StateContext, DispatchContext } from '../context/context';

export const NextQuestionButton = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const { TOTAL_QUESTIONS, gameOver, number, loading, userAnswers } = state;

  const nextQuestion = () => {
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      dispatch({ type: 'changeValue', name: 'gameOver', payload: true });
    } else {
      dispatch({ type: 'changeValue', name: 'number', payload: nextQuestion });
    }
  };

  return (
    <>
      {!gameOver &&
      !loading &&
      userAnswers?.length === number + 1 &&
      number !== TOTAL_QUESTIONS - 1 ? (
        <button className='next' onClick={nextQuestion}>
          Next question
        </button>
      ) : null}
    </>
  );
};
