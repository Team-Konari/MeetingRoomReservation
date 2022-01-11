import React from 'react';
import ReactDOM from 'react-dom';
import Root from './pages';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root'),
);
