import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownURLViewer = props => {
  return <ReactMarkdown source={props.content} />;
};

export default MarkdownURLViewer;
