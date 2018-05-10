/**
 *  Reducer: 'test'
 */

import axios from 'axios'
import Test from '../models/test'

export const ADD_MESSAGE = 'TEST/ADD_MESSAGE'
export const MESSAGE_RECEIVED = 'TEST/MESSAGE_RECEIVED'

let nextMessageId = 0

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {

    case ADD_MESSAGE:
    case MESSAGE_RECEIVED:
      return [...state, {id: action.id, message: action.message}]

    default:
      return state
  }
}

const actions = {
  addMessage: (message) => ({type: ADD_MESSAGE, id: nextMessageId++, message}),
  messageReceived: (message) => ({type: MESSAGE_RECEIVED, id: nextMessageId++, message}),
}

/**
 *  Action: 'addMessage'
 */
export const addMessage = (message) => {
  return dispatch => {
    dispatch(actions.addMessage(message))
  }
}

/**
 *  Action: 'messageReceived'
 */
export const messageReceived = (message) => {
  return dispatch => {
    dispatch(actions.messageReceived(message))
  }
}