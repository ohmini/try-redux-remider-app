import React, { PureComponent } from 'react'

import Header from './Header'
import InputReminder from './InputReminder'
import Card from './Card'

class App extends PureComponent {
  render(){
    return (
      <section>
        <Header />
        <InputReminder />
        <Card />
      </section>
    )
  }
}

export default App
