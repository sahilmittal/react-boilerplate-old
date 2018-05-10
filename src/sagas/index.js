import { takeEvery } from 'redux-saga/effects'

const handleNewMessage = function* handleNewMessage(params) {
  yield takeEvery('TEST/ADD_MESSAGE', (action) => {
    debugger
    params.socket.send(JSON.stringify(action))
  })
}

export default handleNewMessage