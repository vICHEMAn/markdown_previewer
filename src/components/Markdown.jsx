import React from 'react';
import '../stylesheets/_textarea.scss';

const Markdown = () => (
  <div className="textholder">
    <textarea placeholder="Mark it down." />
    <p id="markdown-p">MARKDOWN</p>
  </div>
);

export default Markdown;
