/**
 *  Component: App
 */

import React from 'react';
import { Route } from 'react-router-dom'

import Test from '../test'

import requireAuth from '../../utils/requireAuth'

const App = () => {
  return(
    <div>
      <main>
        <Route exact path="/" component={requireAuth(Test)} />
      </main>
    </div>
  )
}

export default App