import React, { useContext } from 'react';
import { fetchQuizQuestions, Difficulty } from '../API';
import { StateContext, DispatchContext } from '../context/context';

export const StartButton = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const { TOTAL_QUESTIONS, gameOver } = state;

  const startTrivia = async () => {
    dispatch({ type: 'changeValue', name: 'loading', payload: true });
    dispatch({ type: 'changeValue', name: 'gameOver', payload: false });

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    //error handler add
    dispatch({ type: 'setQuestions', name: '', payload: newQuestions });
    dispatch({ type: 'changeValue', name: 'score', payload: 0 });
    dispatch({ type: 'changeValue', name: 'userAnswers', payload: [] });
    dispatch({ type: 'changeValue', name: 'loading', payload: false });
  };

  return (
    <>
      {gameOver && (
        <button className='start' onClick={startTrivia}>
          Start
        </button>
      )}
    </>
  );
};
