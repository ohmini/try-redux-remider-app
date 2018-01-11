import { createStore, applyMiddleware } from 'redux'
import reminderReducer from '../reducers'
import logger from 'redux-logger'

const store = createStore(
    reminderReducer,
    applyMiddleware(logger)
  )

export default store
