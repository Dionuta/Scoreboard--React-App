import React,{Component} from  'react';



class Counter extends Component {
    state = {
        score: 0
    };

    incrementScore = () => {
        this.setState(prevState => ({
            score: prevState.score + 1
        }));
    }

    decrementScore = () => {
        this.setState(prevState => ({
            score: prevState.score - 1
        }));
    }

    render() {
        const { decrementScore, incrementScore } = this;
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={decrementScore}> - </button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={incrementScore}> + </button>
            </div>
        );
    }
}

export default Counter;