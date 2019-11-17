import React from 'react';
import { Link } from 'react-router-dom';

const MarkdownURLNoURLProvided = () => (
  <>
    <p>You must provide a "url" query parameter with a valid URL.</p>
    <p>
      For example:
      <Link
        to="/?url=https://raw.githubusercontent.com/markdown-it/markdown-it/master/support/demo_template/sample.md"
        style={{ marginLeft: '0.5em' }}
      >
        https://raw.githubusercontent.com/markdown-it/markdown-it/master/support/demo_template/sample.md
      </Link>
    </p>
  </>
);

export default MarkdownURLNoURLProvided;
