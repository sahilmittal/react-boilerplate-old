import { messageReceived } from '../modules/test'

const setupSocket = (dispatch) => {
  const socket = new WebSocket('ws://localhost:8989')

  // socket.onopen = () => {
  //   debugger
  //   socket.send(JSON.stringify({
  //     type: 'TEST/ADD_MESSAGE',
  //     message: 'hiiiiiiiiii'
  //   }))
  // }

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data)
    switch (data.type) {
      case 'TEST/ADD_MESSAGE':
        dispatch(messageReceived(data.message))
        break
      default:
        break
    }
  }

  return socket
}

export default setupSocket