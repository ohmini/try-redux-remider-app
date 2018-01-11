import React, { Component } from 'react'
import { connect } from 'react-redux'

class Card extends Component {

  render(){
    const { reminders } = this.props
    return (
      <section className="section">
        <div className="columns is-multiline">
        {
          reminders.map((reminder, index) => {
            return(
            <div key={reminder.id} className="column is-3">
              <div className="notification is-info">
                <button className="delete"></button>
                {reminder.text}
              </div>
            </div>
            )
          })
        }
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

export default connect(mapStateToProps)(Card)
