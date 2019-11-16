import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import MarkdownURLLoader from './MarkdownURLLoader';
import { isValidUrl } from './helpers';

const App = () => {
  const location = useLocation();
  const search = queryString.parse(location.search);
  const { url } = search;

  if (isValidUrl(url)) {
    return <MarkdownURLLoader url={url} />;
  } else {
    return 'You must provide a "url" query parameter with a valid URL.';
  }
};

export default App;
