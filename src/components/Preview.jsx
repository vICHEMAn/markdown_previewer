import React from 'react';
import Marked from 'marked';
import '../stylesheets/_textarea.scss';

const Preview = () => (
  <div className="textholder">
    <textarea />
    <p id="preview-p">PREVIEW</p>
  </div>
);

export default Preview;
