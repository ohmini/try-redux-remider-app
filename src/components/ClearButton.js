import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { clearReminder } from '../actions'

const Button = styled.button`
  margin-top: 20px;
`
class ClearButton extends PureComponent {
  render (){
    return (
      <Button className="button is-danger"
        onClick={this.props.clearReminder}
        >
        Clear ALL
      </Button>
    )
  }
}

export default connect(null, {clearReminder})(ClearButton)
