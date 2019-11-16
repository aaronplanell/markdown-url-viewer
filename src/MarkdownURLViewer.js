import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { isValidUrl } from './helpers';

const MarkdownURLViewer = () => {
  const location = useLocation();
  const search = queryString.parse(location.search);
  const { url } = search;

  if (isValidUrl(url)) {
    return <>Markdown URL Viewer: {url}</>;
  } else {
    return 'You must provide a "url" query parameter with a valid URL.';
  }
};

export default MarkdownURLViewer;
