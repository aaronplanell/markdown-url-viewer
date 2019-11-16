import React, { useState, useEffect } from 'react';

import MarkdownURLViewer from './MarkdownURLViewer';

const MarkdownURLLoader = props => {
  const [content, setContent] = useState();

  useEffect(() => {
    async function getContent() {
      let url = props.url;
      const response = await fetch(url);
      if (response && response.ok) {
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onloadend = () => setContent(reader.result);
        reader.readAsText(blob);
      }
    }

    getContent();
  }, [props.url]);

  if (!content) {
    return <>Loading...</>;
  } else {
    return <MarkdownURLViewer content={content} />;
  }
};

export default MarkdownURLLoader;
