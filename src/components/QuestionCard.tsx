import React, { useContext } from 'react';
import { StateContext, DispatchContext } from '../context/context';
import { Wrapper, ButtonWrapper } from './QuestionCard.style';

export const QuestionCard: React.FunctionComponent = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const {
    TOTAL_QUESTIONS,
    gameOver,
    number,
    questions,
    userAnswers,
    score,
  } = state;

  const question = questions[number].question;
  const answers = questions[number].answers;
  const userAnswer = userAnswers ? userAnswers[number] : undefined;

  const checkAnswer = (e: any) => {
    console.log(number);
    if (!gameOver) {
      const answer = e.currentTarget.childNodes[0].textContent; // e.currentTarget.value

      const correct = questions[number].correct_answer === answer;
      if (correct)
        dispatch({
          type: 'changeValue',
          name: 'score',
          payload: score + 1,
        });

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correntAnswer: questions[number].correct_answer,
      };
      dispatch({
        type: 'changeValue',
        name: 'userAnswers',
        payload: [...userAnswers, answerObject],
      });
    }
  };

  return (
    <Wrapper>
      <p className='number'>
        Question: {number + 1} / {TOTAL_QUESTIONS}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer: any) => (
          <ButtonWrapper
            key={answer}
            correct={userAnswer?.correntAnswer === answer}
            userClicked={userAnswer?.answer === answer}
          >
            <button disabled={userAnswer ? true : false} onClick={checkAnswer}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};
