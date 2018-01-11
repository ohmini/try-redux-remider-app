import React from 'react'
import { createStore } from 'redux'
import reminderReducer from '../reducers'

const store = createStore(reminderReducer)

export default store
