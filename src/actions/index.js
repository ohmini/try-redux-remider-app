import { ADD_REMINDER } from '../constants'

export const addReminder = (text) => {
  console.log('action addReminder', text)
  return { type: ADD_REMINDER, text}
}
