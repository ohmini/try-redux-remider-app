import React, { PureComponent } from 'react'

import Header from './Header'
import InputRemider from './InputRemider'

class App extends PureComponent {
  render(){
    return (
      <section>
        <Header />
        <InputRemider />
      </section>
    )
  }
}

export default App
