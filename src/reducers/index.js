import { ADD_REMINDER } from '../constants'

const createReminder = (text) => {
  return {
    text,
    id: Math.random()
  }
}

const reminderReducer = (state = [], action) => {
  switch(action.type){
    case ADD_REMINDER:
      return [...state, createReminder(action.text)]
    default:
      return state
  }
}

export default reminderReducer
