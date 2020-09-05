import React, { useContext } from 'react';
import {
  StateContext,
  DispatchContext,
  DifficultyPoints,
} from '../context/context';
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
    difficultLevel,
    pointArr,
    maxScore,
  } = state;

  const question: string = questions[number].question;
  const answers: string[] = questions[number].answers;
  const userAnswer: any = userAnswers ? userAnswers[number] : undefined;

  const checkAnswer = (e: any) => {
    if (!gameOver) {
      const answer = e.currentTarget.childNodes[0].textContent; // e.currentTarget.value
      const correct = questions[number].correct_answer === answer;
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correntAnswer: questions[number].correct_answer,
      };

      if (correct) addScore();
      if (number + 1 === TOTAL_QUESTIONS)
        dispatch({
          type: 'changeValue',
          name: 'gameOver',
          payload: true,
        });

      dispatch({
        type: 'changeValue',
        name: 'userAnswers',
        payload: [...userAnswers, answerObject],
      });
    }
  };

  const addScore = (): void => {
    pointArr.map((elem: DifficultyPoints) => {
      if (elem.difficulty === difficultLevel)
        dispatch({
          type: 'changeValue',
          name: 'score',
          payload: score + elem.point,
        });
      if (score + elem.point >= maxScore) {
        dispatch({
          type: 'changeValue',
          name: 'maxScore',
          payload: score + elem.point,
        });
        upDateMaxScore(score + elem.point);
      }
    });
  };

  const upDateMaxScore = (score: any): void => {
    const addScore: any = parseInt(score);
    localStorage.setItem('maxScore', addScore);
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
