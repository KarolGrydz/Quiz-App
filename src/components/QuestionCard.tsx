import React, { useState, useContext } from 'react';
import { StateContext } from '../context/context';
import { AnswerObject } from '../context/context';
import { Wrapper, ButtonWrapper } from './QuestionCard.style';

type Props = {
  question: string;
  answers: string[];
  // callback: any;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
};

export const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  userAnswer,
  questionNr,
}) => {
  const state = useContext(StateContext);
  const { TOTAL_QUESTIONS } = state;
  return (
    <Wrapper>
      <p className="number">
        Question: {questionNr} / {TOTAL_QUESTIONS}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer) => (
          <ButtonWrapper
            key={answer}
            correct={userAnswer?.correntAnswer === answer}
            userClicked={userAnswer?.answer === answer}
          >
            <button disabled={userAnswer ? true : false}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};
