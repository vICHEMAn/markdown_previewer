import React from 'react';
import { render } from 'react-dom';
import Markdown from './components/Markdown';
import Preview from './components/Preview';
import './stylesheets/index.scss';

window.React = React;

render(
  <div className="container">
    <Markdown />
    <Preview />
  </div>,
  document.getElementById('root'),
);
