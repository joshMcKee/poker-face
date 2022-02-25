import React from 'react';
import ReactDOM from 'react-dom';
import {render, screen, fireEvent, act} from '@testing-library/react'
import App from '../App';

// const setup = () => {
//   const utils = render(<App />);
//   const input = screen.getByTestId('file-input');
//   return {
//     input,
//     ...utils,
//   }
// }

it('renders the App component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

// it('sets the hands state when a file is uploaded', () => {
//   let input, utils;
//   act(() => {
//     const testStuff = setup();
//     input = testStuff.input;
//     utils = testStuff.utils;
//   });
//   fireEvent.change(input, {
//     target: {
//       files: [new File(['AH TH QH JH KH'], 'test-hand.txt', {type: 'text/plain'})],
//     }
//   });
  
//   console.log('utils', utils);
  
//   expect(1).toBeTruthy();
// });