/**
 *  Component: 'requireAuth'
 *  A higher order component (HOC) that wraps other components to allow
 *  the components access only if the user is authenticated
 */

import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

// import { authenticateUser } from '../modules/auth'

export default function(ComposedComponent) {

  const propTypes = {
    // isAuthenticated: PropTypes.bool
  }

  class Authenticate extends React.Component {

    componentWillMount = async () => {
      // authenticate here..
    }
    
    render() {
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }

  const mapStateToProps = state => ({
    // isAuthenticated: state.auth.isAuthenticated
  })

  const mapDispatchToProps = dispatch => bindActionCreators({
    // authenticateUser,
    // navigateToLogin: () => push('/')
  }, dispatch)

  Authenticate.propTypes = propTypes

  return connect(
    mapStateToProps, 
    mapDispatchToProps
  )(Authenticate)
}