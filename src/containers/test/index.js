/**
 *  Component: Test
 */

import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { testAction } from '../../modules/test'
import Loader from '../../components/loader'

const propTypes = {
  testAction: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
}

class Test extends React.Component {

  state = {
  }

  componentWillMount() {
  }

  componentDidMount() {
    const {data} = this.props;
    console.log(data);
  }

  render () {
    return (
      <div>
        <Loader />
      </div>
    )
  }
} 

const mapStateToProps = state => ({
  data: state.test.data
})

const mapDispatchToProps = dispatch => bindActionCreators({
  testAction
}, dispatch)

Test.propTypes = propTypes

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test)