import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import { store } from './store';

import Todos from './containers/Todos';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));