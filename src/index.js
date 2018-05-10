/**
 *  Starting point of the app
 */

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { sagaMiddleware, history } from './store'
import App from './containers/app'
import handleNewMessage from './sagas'

import setupSocket from './sockets'

import './styles/colors.scss'
import './styles/reset.scss'
import './styles/common.scss'

const target = document.querySelector('#root')

const socket = setupSocket(store.dispatch)
sagaMiddleware.run(handleNewMessage, { socket })

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)