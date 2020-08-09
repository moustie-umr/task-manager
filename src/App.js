import React from 'react';
import Todos from './todos'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>TODO APP</h1>
        <Todos/> 
      </div>
    </Provider>
  );
}

export default App;
