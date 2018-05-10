/**
 *  Component: Test
 */

import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addMessage } from '../../modules/test'
// import Loader from '../../components/loader'

const propTypes = {
  addMessage: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
}

let input

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
        <input
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              this.props.addMessage(input.value)
              input.value = ''
            }
          }}
          type="text"
          ref={(node) => {
            input = node
          }}
        />

        <section>
          <ul>
          {this.props.messages.map(message => (
            <div key={message.id}>
              {message.message}
            </div>
          ))}
          </ul>
        </section>

      </div>
    )
  }
} 

const mapStateToProps = state => ({
  messages: state.test
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addMessage
}, dispatch)

Test.propTypes = propTypes

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test)