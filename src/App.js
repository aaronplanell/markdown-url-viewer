import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import MarkdownURLViewer from './MarkdownURLViewer';

const App = () => (
  <Router>
    <MarkdownURLViewer />
  </Router>
);

export default App;
