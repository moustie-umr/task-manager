import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'

import Todos from './todos'


function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>A REALLY RANDOM TODO APP</h1>
        <Todos/> 
      </div>
    </Provider>
  );
}

export default App;
