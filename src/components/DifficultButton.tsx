import React, { useContext } from 'react';
import { StateContext, DispatchContext } from '../context/context';
import { Difficulty } from '../API';

export const DifficultButton: React.FunctionComponent = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const { gameOver } = state;

  const onHandler = (e: any) => {
    dispatch({
      type: 'changeValue',
      name: 'difficultLevel',
      payload: e.target.value,
    });
  };

  return (
    <>
      {gameOver && (
        <>
          <h2>Select difficulty (easy = 1 point, hard = 3 points)</h2>
          <select
            name='diffulcty_level'
            id='diffulcty_level'
            onChange={onHandler}
            className='start'
          >
            <option value={Difficulty.EASY}>EASY</option>
            <option value={Difficulty.MEDIUM}>MEDIUM</option>
            <option value={Difficulty.HARD}>HARD</option>
          </select>
        </>
      )}
    </>
  );
};
