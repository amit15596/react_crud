
import React from 'react';
import 'antd/dist/reset.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/routers';

import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
