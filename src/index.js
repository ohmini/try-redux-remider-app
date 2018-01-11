import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'
import reminderReducer from './reducers'

let store = createStore(reminderReducer)

ReactDOM.render(
  <Provider store={store}><App /></Provider>
  , document.getElementById('root')
)
