import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { addReminder } from '../actions'

const AddButton = styled.button`
  margin-top: 20px;
`

class InputReminder extends Component {

  constructor(props){
    super(props)
    this.state = {
      text: ''
    }
  }

  addReminder = () => {
    this.props.addReminder(this.state.text)
    this.setState({text: ''})
  }

  render(){
    return (
      <section className="section">
        <div className="columns is-centered">
          <div className="column">
            <input className="input" type="text" placeholder="add ..."
            value={this.state.text}
            onChange={(e) => this.setState({text: e.target.value})}
            />
            <div className="buttons is-centered">
              <AddButton className="button is-info"
              onClick={this.addReminder}
              >Add Remider</AddButton>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reminders: state
  }
}

export default connect(mapStateToProps, {addReminder})(InputReminder)
