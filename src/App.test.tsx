import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import App from './App';
import { ContextControler } from './context/context';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  render(
    <ContextControler>
      <App />
    </ContextControler>
  );
});

afterEach(cleanup);

describe('On window load', () => {
  test('should be text on header', () => {
    const textOnHeader = screen.getByText(/quiz app/i);
    expect(textOnHeader).toBeInTheDocument();
  });

  test('check buttons', () => {
    const buttonStart = screen.getByRole('button', { name: /start/i });
    const difficultyButton = screen.getByDisplayValue(/easy/i);
    const categoryButton = screen.getByDisplayValue(/general knowledge/i);
    const inputButton = screen.getByDisplayValue(/10/i);
    const btnArr = [buttonStart, categoryButton, difficultyButton, inputButton];
    btnArr.map((elem) => {
      expect(elem).toBeInTheDocument();
    });
  });
});

describe('Before click start', () => {
  test('Check input questions number', () => {
    const inputButton = screen.getByDisplayValue(/10/i);
    userEvent.type(inputButton, '15');
    expect((inputButton as HTMLInputElement).value).toBe('15');
  });
  test('Check difficult level', () => {
    const difficultyButton = screen.getByDisplayValue(/easy/i);
  });
});
