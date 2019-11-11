/**
 * React renderer.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Import the styles here to process them with webpack
import '@public/style.css';
import { StyledApp } from './components/App/style';
import { fonts } from './constants/fonts';
import { Toolbar } from './components/Toolbar';

const styleElement = document.createElement('style');

styleElement.textContent = `
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(${fonts.robotoRegular}) format('woff2');
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  src: url(${fonts.robotoMedium}) format('woff2');
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  src: url(${fonts.robotoLight}) format('woff2');
}
`;

document.head.appendChild(styleElement);

const App = () => (
  <StyledApp>
    <Toolbar />
  </StyledApp>
)

ReactDOM.render(<App />, document.getElementById('app'));
