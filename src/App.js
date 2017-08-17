import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Display'
import Button  from './Button'

class App extends Component {
  constructor() {
    super()
    this.state =  {
      count: 0
    }
  }


  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <section>
        <Display count={this.state.count}/>
        <Button increment={this.increment.bind(this)}/>
      </section>
    )
  }
}
export default App;
