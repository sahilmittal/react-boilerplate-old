/**
 *  Reducer: 'test'
 */

import axios from 'axios'
import Test from '../models/test'

export const TEST_SUCCESS = 'TEST/TEST_SUCCESS'
export const TEST_FAILED = 'TEST/TEST_FAILED'

const initialState = {
  data: new Test()
}

export default (state = initialState, action) => {
  switch (action.type) {

    case TEST_SUCCESS:
      return {...state, data: new Test(action.id)}

    case TEST_FAILED:
      return {...state}

    default:
      return state
  }
}

const actions = {
  testSuccess: (id) => ({type: TEST_SUCCESS, id}),
  testError: () => ({type: TEST_FAILED})
}

/**
 *  Action: 'testAction'
 */
export const testAction = () => {
  return dispatch => {
    return axios.post('/test').then(
      res => dispatch(actions.testSuccess(1)),
      err => dispatch(actions.testError())
    ).catch(
      err => dispatch(actions.testError())
    )
  }
}