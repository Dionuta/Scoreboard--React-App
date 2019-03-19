import React, {Component} from 'react'


class StopWatch extends Component {
    render() {
        return (
            <div className='stopwatch'>
              <h2>StopWatch</h2>
              <span className='stopwatch-time'>0</span>
              <button>Start</button>
              <button>Rest</button>
            </div>
       ) 
    }
}

export default StopWatch;