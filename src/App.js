import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import MarkdownURLLoader from './MarkdownURLLoader';
import MarkdownURLNoURLProvided from './MarkdownURLNoURLProvided';
import { isValidUrl } from './helpers';

const App = () => {
  const location = useLocation();
  const { url } = queryString.parse(location.search);

  if (isValidUrl(url)) {
    return <MarkdownURLLoader url={url} />;
  } else {
    return <MarkdownURLNoURLProvided />;
  }
};

export default App;
