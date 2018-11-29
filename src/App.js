import React, { Component } from 'react';
import RegistrationForm from './components/RegistrationForm';

import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      start : false, 
      text : 'Hello',
      textIndex : 0
    };
    this.counter = 0;
    this.hello = [
      'Hello',
      'Bonjour',
      'Ciao',
      'こんにちは',
      'Xin chào',
      'Zdravo',
      '你好',
      'Halo',
      'Привет'

    ]
  }

  componentDidMount(){
    this.interval = setInterval(() => {
      this.counter = this.counter + 1;
      this.counter = this.counter % this.hello.length;
      this.setState({
        textIndex : this.counter
      });
      // console.log(this.hello[this.counter])
    }, 2000);
  }
  
  onRegister(){
    
    this.setState({
      'start': true
    });
    setTimeout(()=> {
      this.refs.mainText.style.display = "none";
      this.refs.question.className="question";
    }, 400)
  }
  render() {
    return (
      <div className="wrapper">

          <div className={!this.state.start ? null : "mainText"} ref="mainText">
            <h1>
              <span className="hello">{this.hello[this.state.textIndex]} </span>, please register to continue.
            </h1>
            <br />
            <div className="action">
              <div className="action-button" onClick={()=>this.onRegister()}>
                Start
              </div>
            </div>
          
          </div>
          
          <div className='questionHidden' ref="question">
            <RegistrationForm />
          </div>
          
          
          
        </div>
    );
  }
}

export default App;
