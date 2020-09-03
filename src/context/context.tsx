import React from 'react';
import { useImmerReducer } from 'use-immer';
import { initialState } from './initialState';
import { reducer } from './reducer';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correntAnswer: string;
};

export type InitialStateProps = {
  questions: any;
  TOTAL_QUESTIONS: any;
  gameOver: boolean;
  userAnserws: AnswerObject[];
  loading: boolean;
  score: number;
  number: number;
  test: string;
};

type DispatchProp = {
  type: any;
  name: string;
  payload: any;
};

export const StateContext = React.createContext<Partial<InitialStateProps>>({});
export const DispatchContext = React.createContext<
  React.Dispatch<DispatchProp>
>(() => null);

export const ContextControler: React.FC = ({ children }) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};
