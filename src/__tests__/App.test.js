import React from 'react';
import ReactDOM from 'react-dom';
import {render, screen, fireEvent, act} from '@testing-library/react'
import App from '../App';
import { parseHandsFromString } from '../services/PokerHandService';

jest.mock('../services/PokerHandService', () => {
  const originalModule = jest.requireActual('../services/PokerHandService');

  return {
    __esModule: true,
    ...originalModule,
    parseHandsFromString: jest.fn()
  };
})

const whenStable = async () =>
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });

it('renders the App component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('hands state gets set when a file is uploaded', async () => {
  const file = new File(['KS QD JC TH 9S'], 'test-hand.txt', { type: 'text/plain' });

  render(<App />);
  const input = screen.getByTestId('file-input');

  fireEvent.change(input, {
      target: { files: [file] }
  });

  await whenStable();

  expect(parseHandsFromString).toBeCalledTimes(1);
});