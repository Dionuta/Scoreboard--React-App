import React, {Component} from 'react'


class StopWatch extends Component {
    state ={
        isRunning : false,
        elapsedTime:0,
        previousTime:0

    }
   
   componentDidMount() {
       this.invervalID = setInterval(() => this.tick(), 100)
   }

    tick = () => {
      if(this.state.isRunning){
          const now = Date.now();
          this.setState(prevState => ({
              previousTime:now,
              elapsedTime:prevState + (now - this.state.previousTime)
          }))
      }
    }

    handleStopwatch = () =>{
      this.setState(prevState => ({
          isRunning: !prevState.isRunning
      }));
      if (!this.state.isRunning){
          this.setState({previousTime: Date.now() })
      }
    }

    render() {
        return (
            <div className='stopwatch'>
              <h2>StopWatch</h2>
              <span className='stopwatch-time'>0</span>
              <button onClick={this.handleStopwatch}>
                  {this.state.isRunning ? 'Stop':  'Start'}
              </button>
              <button>Rest</button>
            </div>
       ) 
    }
}

export default StopWatch;