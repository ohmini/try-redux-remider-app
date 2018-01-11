import { bake_cookie, read_cookie } from 'sfcookies'

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
  let reminders = null;
  state = read_cookie('reminders')
  switch(action.type){
    case ADD_REMINDER:
      reminders = [...state, createReminder(action.text)]
      bake_cookie('reminders', reminders)
      return reminders
    case DELETE_REMINDER:
      reminders = deleteReminder(state, action.id)
      bake_cookie('reminders', reminders)
      return reminders
    case CLEAR_REMINDER:
      bake_cookie('reminders', [])
      return []
    default:
      return state
  }
}

export default reminderReducer
