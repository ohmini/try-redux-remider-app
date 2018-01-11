import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDER } from '../constants'

const createReminder = (text) => {
  return {
    text,
    id: Math.random()
  }
}
const deleteReminder = (state = [], id) => {
  const reminders = state.filter(reminder => reminder.id !== id)
  return reminders
}

const reminderReducer = (state = [], action) => {
  switch(action.type){
    case ADD_REMINDER:
      return [...state, createReminder(action.text)]
    case DELETE_REMINDER:
      return deleteReminder(state, action.id)
    case CLEAR_REMINDER:
      return []
    default:
      return state
  }
}

export default reminderReducer
