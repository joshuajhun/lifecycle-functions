import React, { Component } from 'react'

export default class Display extends Component {
  constructor() {
    super()
    this.state ={
      lit: 'its always lit',
      color: 'red',
    }
  }

  componentWillReceiveProps(nextProps) {
    const state = nextProps.count % 2 === 0 ? 'its always lit'
                                            : 'until its not'
    this.setState({
      lit: state
    })
  }

  shouldComponentUpdate(nextProps, newState) {
    return !(nextProps.count === 3)
  }

  componentWillUpdate(nextProps, nextState) {
    if( nextProps.count > 5) {
      this.setState({color: 'purple'})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props !== prevProps && this.state !== prevState){
      console.log(this.state, this.props);
    }
  }

  render() {

    const stylez = {
      red: {
        color: 'red'
      },
      purple: {
        color: 'purple'
      }
    }

    return (
      <section>
        <h1> is it lit: {this.state.lit}</h1>
        <h3 style={stylez[this.state.color]}>your yung-count: {this.props.count}</h3>
      </section>
    )
  }
}
