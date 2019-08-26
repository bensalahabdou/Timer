import React, { Component } from 'react'

export default class Miniteur extends Component {
    constructor(props){
        super(props);
        this.state={
            timerStarted: false,
            timerStopped: true,
            second: 0,
            minute: 0,
            heure: 0
        };
    }
handlestarting(e){
    e.preventDefault();   
    if (this.state.timerStopped) {
        
        this.timer = setInterval(() => {
            this.setState({timerStarted: true, timerStopped: false});
            if (this.state.timerStarted){
                
                if (this.state.second >= 59){
                    this.setState((prevState) => ({ minute: prevState.minute + 1, second:0})) 
                }
                if (this.minute >= 59){
                    this.setState((prevState) => ({ heure: prevState.heure + 1, minute:0, second:0})) 
                } 
                this.setState((prevState) => ({second: prevState.second + 1}));     
            }
        }
        , 1000); 
    }
}
handlestopped(e) {
    e.preventDefault(); 
    this.setState({timerStarted: false, timerStopped: true});
    clearInterval(this.timer)    
}
handleReset(e) {
    e.preventDefault(); 
    this.setState({second: 0, minute: 0, heure: 0});
    clearInterval(this.timer)    
}

  
  render() {
    return (
      <div className="timer">
          <div className="timer-display">
              <h1 className="displayed">{this.state.heure + " : " + this.state.minute + " : " + this.state.second}</h1>
          </div>
          <div className="timer-btn">
              <button className="btn start" onClick={this.handlestarting.bind(this)}>start</button>
              <button className="btn stop" onClick={this.handlestopped.bind(this)}>stop</button>
              <button className="btn reset" onClick={this.handleReset.bind(this)}>reset</button>
          </div>
        
        
      </div>
    )
  }
}
