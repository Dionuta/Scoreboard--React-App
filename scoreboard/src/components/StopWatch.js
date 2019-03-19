import React, {Component} from 'react'


class StopWatch extends Component {
    state ={
        isRunning : flase
    }
    render() {
        return (
            <div className='stopwatch'>
              <h2>StopWatch</h2>
              <span className='stopwatch-time'>0</span>
              <button>
                  {this.state.isRunning ? 'Stop':  'Start'}
              </button>
              <button>Rest</button>
            </div>
       ) 
    }
}

export default StopWatch;