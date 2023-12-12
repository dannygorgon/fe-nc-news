import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { createRoot } from 'react-dom/client';

import CssBaseline from '@mui/material/CssBaseline';
import ViewArticles from './components/ViewArticles.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <CssBaseline />
    <App />
    <ViewArticles />
  </React.StrictMode>,
)
