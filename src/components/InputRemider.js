import React, { PureComponent } from 'react'
import styled from 'styled-components'

const AddButton = styled.button`
  margin-top: 20px;
`

class InputRemider extends PureComponent {
  render(){
    return (
      <section className="section">
        <div className="columns is-centered">
          <div className="column">
            <input className="input" type="text" placeholder="add ..." />
            <div className="buttons is-centered">
              <AddButton className="button is-info">Add Remider</AddButton>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default InputRemider
