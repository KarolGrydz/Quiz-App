import React, { useState, useContext } from 'react';
import { fetchQuizQuestions, Difficulty, QuestionState } from './API';
import { StateContext, DispatchContext, AnswerObject } from './context/context';

//Questions
import { QuestionCard } from './components/QuestionCard';

import { GlobalStyle, Wrapper } from './App.styles';

const App = () => {
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [gameOver, setGameOver] = useState(true);

  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const { TOTAL_QUESTIONS, loading, score, number } = state;
  console.log(number);

  const startTrivia = async () => {
    dispatch({ type: 'setLoading', name: 'loading', payload: true });
    setGameOver(false);
    dispatch({ type: 'setValue', name: 'gameOver', payload: false });

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    //error handler add
    setQuestions(newQuestions);
    dispatch({ type: 'setValue', name: 'score', payload: 0 });
    setUserAnswers([]);
    dispatch({ type: 'setValue', name: 'number', payload: 0 });
    dispatch({ type: 'setLoading', name: 'loading', payload: false });
  };

  // const checkAnswer = (e: any) => {
  //   if (!gameOver) {
  //     const answer = e.currentTarget.childNodes[0].textContent; // e.currentTarget.value

  //     const correct = questions[number].correct_answer === answer;
  //     if (correct)
  //       dispatch({
  //         type: 'setValue',
  //         name: 'number',
  //         payload: (prev) => prev + 1,
  //       });
  //     const answerObject = {
  //       question: questions[number].question,
  //       answer,
  //       correct,
  //       correntAnswer: questions[number].correct_answer,
  //     };
  //     setUserAnswers((prev) => [...prev, answerObject]);
  //   }
  // };

  // const nextQuestion = () => {
  //   const nextQuestion = number + 1;

  //   if (nextQuestion === TOTAL_QUESTIONS) {
  //     setGameOver(true);
  //   } else {
  //     setNumber(nextQuestion);
  //   }
  // };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Quize app</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startTrivia}>
            Start
          </button>
        ) : null}
        {!gameOver && <p className="score">Score: {score} </p>}
        {loading && <p>Loading questions...</p>}
        {!loading && number !== undefined && !gameOver && (
          <QuestionCard
            questionNr={number + 1}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            // callback={checkAnswer}
          />
        )}
        {/* {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={nextQuestion}>
            Next question
          </button>
        ) : null} */}
      </Wrapper>
    </>
  );
};

export default App;
