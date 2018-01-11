import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { withState, compose, withHandlers } from 'recompose'

import { addReminder } from '../actions'
import ClearButton from './ClearButton'

const AddButton = styled.button`
  margin-top: 20px;
`

class InputReminder extends PureComponent {

  addReminder = () => {
    this.props.addReminder(this.props.value)
    this.props.clearValue()
  }

  render(){
    const { value, onChange } = this.props
    return (
      <section className="section">
        <div className="columns is-centered">
          <div className="column">
            <input className="input" type="text" placeholder="add ..."
            value={value} onChange={onChange}
            />
            <div className="buttons is-centered">
              <AddButton className="button is-info"
              onClick={this.addReminder}
              >Add Remider</AddButton>
              <ClearButton />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const enhance = compose(
  withState('value', 'updateValue', ''),
  withHandlers({
    onChange: props => event => {
      props.updateValue(event.target.value)
    },
    clearValue: props => event => {
      props.updateValue('')
    }
  })
)

const mapStateToProps = (state) => {
  return {
    reminders: state
  }
}

export default connect(mapStateToProps, {addReminder})(enhance(InputReminder))
