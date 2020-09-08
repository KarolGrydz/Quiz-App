import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import App from './App';
import { ContextControler } from './context/context';
import userEvent from '@testing-library/user-event';
import mockResponse from './__mocks__/opentdb-response.json';

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
    userEvent.selectOptions(difficultyButton, 'medium');
    expect((screen.getByTestId('medium') as HTMLOptionElement).selected).toBe(
      true
    );
  });
  test('Check category select', () => {
    const categoryButton = screen.getByDisplayValue(/general knowledge/i);
    userEvent.selectOptions(categoryButton, '23');
    expect((screen.getByTestId('History') as HTMLOptionElement).selected).toBe(
      true
    );
    expect(
      (screen.getByTestId(/general knowledge/i) as HTMLOptionElement).selected
    ).toBe(false);
  });
});

describe('After clicked start button', () => {
  test('view after click start', () => {
    const buttonStart = screen.getByRole('button', { name: /start/i });
    userEvent.click(buttonStart);
    expect(screen.getByText('Score: 0')).toBeInTheDocument();
    expect(screen.getByText('High Score: 0')).toBeInTheDocument();
    expect(screen.getByText('Loading questions...')).toBeInTheDocument();
  });

  // test('view after click start and get data', async () => {
  //   fetch(JSON.stringify({ data: '12345' }));
  //   const inputButton = screen.getByDisplayValue(/10/i);
  //   const difficultyButton = screen.getByDisplayValue(/easy/i);
  //   const categoryButton = screen.getByDisplayValue(/general knowledge/i);
  //   const buttonStart = screen.getByRole('button', { name: /start/i });
  //   userEvent.type(inputButton, '15');
  //   userEvent.selectOptions(difficultyButton, 'medium');
  //   userEvent.selectOptions(categoryButton, '23');
  //   userEvent.click(buttonStart);
  //   const questions = await screen.findByText(/Question: 1/i);
  //   screen.debug(questions);
  // });
});
