import React, { useContext } from 'react';
import { StateContext } from './context/context';

//Questions
import { QuestionCard } from './components/QuestionCard';
import { StartButton } from './components/StartButton';
import { NextQuestionButton } from './components/NextQuestionButton';
import { QuestionNumberButton } from './components/QuestionNumberButton';

import { GlobalStyle, Wrapper } from './App.styles';

const App = () => {
  const state = useContext(StateContext);
  const { score, number, loading, gameOver } = state;

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Quize app</h1>
        <StartButton />
        <QuestionNumberButton />
        {!gameOver && <p className='score'>Score: {score} </p>}
        {loading && <p>Loading questions...</p>}
        {!loading && number !== undefined && !gameOver && <QuestionCard />}
        <NextQuestionButton />
      </Wrapper>
    </>
  );
};

export default App;
