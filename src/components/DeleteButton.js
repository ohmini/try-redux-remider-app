import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { deleteReminder } from '../actions'

class DeleteButton extends PureComponent {

  deleteReminder = () => {
    this.props.deleteReminder(this.props.cardId)
  }

  render(){
    return (
        <button onClick={this.deleteReminder}
          className="delete"></button>
    )
  }
}

export default connect(null, { deleteReminder })(DeleteButton)
