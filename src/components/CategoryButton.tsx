import React, { useContext } from 'react';
import { StateContext, DispatchContext } from '../context/context';
import { categories } from '../API';

export const CategoryButton: React.FunctionComponent = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const { gameOver } = state;

  const onToggle = (e: any): void => {
    dispatch({
      type: 'changeValue',
      name: 'category',
      payload: e.target.value,
    });
  };

  return (
    <>
      {gameOver && (
        <>
          <h2>Choose category:</h2>
          <select
            name='category_button'
            id=''
            className='start'
            onChange={onToggle}
          >
            {categories.map((category: any) => (
              <option
                key={category.id}
                value={category.id}
                data-testid={category.name}
              >
                {category.name}
              </option>
            ))}
          </select>
        </>
      )}
    </>
  );
};
