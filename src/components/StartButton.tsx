import React, { useContext } from 'react';
import { fetchQuizQuestions } from '../API';
import { StateContext, DispatchContext } from '../context/context';

export const StartButton: React.FunctionComponent = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const { TOTAL_QUESTIONS, gameOver, difficultLevel, category } = state;

  const startTrivia = async () => {
    dispatch({ type: 'changeValue', name: 'loading', payload: true });
    dispatch({ type: 'changeValue', name: 'gameOver', payload: false });

    console.log(category);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      difficultLevel,
      category
    );

    if (!newQuestions.length)
      return dispatch({
        type: 'changeValue',
        name: 'errorHandler',
        payload: true,
      });
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
