import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {SketchField, Tools} from 'react-sketch';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isSketch: false,
    };
  };

  onKeyPress = (event) => {
    if (event.code === 'CapsLock') {
      this.setState({isSketch: !this.state.isSketch});
    };
    console.log(this.state);
  };

  onChange = (event, ...args) => {
    console.log(event, args);
  };

  componentWillMount(){
    document.addEventListener("keydown", this.onKeyPress.bind(this));
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        </p>
        <SketchField
          className={this.state.isSketch ? ('SketchFieldIs') : ('SketchFieldNot')}
          onChange={this.onChange}
          width='100vw'
          height='100vh'
          tool={Tools.Pencil}
          lineColor='yellow'
          lineWidth={3}/>
      </div>
    );
  }
}

export default App;
