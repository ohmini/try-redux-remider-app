import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDER } from '../constants'

export const addReminder = (text) => {
  return { type: ADD_REMINDER, text}
}
export const deleteReminder = (id) => {
  return { type: DELETE_REMINDER, id }
}
export const clearReminder = () => {
  return { type: CLEAR_REMINDER }
}
