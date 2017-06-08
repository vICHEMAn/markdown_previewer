import React from 'react';
import marked from 'marked';

import '../stylesheets/_textarea.scss';
import '../stylesheets/index.scss';

class Markdowner extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      markdown: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      markdown: event.target.value,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="textholder">
          <textarea
            className="text-class"
            placeholder="Mark it down."
            onChange={this.handleChange}
            value={this.state.markdown}
          />
          <p id="markdown-p">MARKDOWN</p>
        </div>
        <div className="textholder">
          <div className="text-class">
            <div
              id="preview"
              dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
            />
          </div>
          <p id="preview-p">PREVIEW</p>
        </div>
      </div>
    );
  }
}

export default Markdowner;
