import React from 'react';
import { render } from 'react-dom';
import Markdowner from './components/Markdown';

window.React = React;

render(
  <Markdowner />,
  document.getElementById('root'),
);
