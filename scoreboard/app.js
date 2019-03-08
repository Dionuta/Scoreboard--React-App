

const Header = ({ title, totalPlayers }) => {
    return (
        <header>
            <h1>{title}</h1>
            <span className='stats'>Player: {totalPlayers}</span>
        </header>
    );
};

const Player = ({ name, removePlayer, id }) => {  // used Destructuring to pass name and score prop to counter 
    return (
        <div className='player'>
            <span className='player-name'>
            <button className="remove-player" onClick={ () => removePlayer(id)}>✖</button>
                {name}
            </span>
            <Counter

            />
        </div>
    );
}

class Counter extends React.Component {  // score was passed down from Player 

    state = {
        score: 0
    };

    incrementScore = () => {   //adds one to score when fired
        this.setState(prevState => ({
            score: prevState.score + 1
        }));
    }

    decrementScore = () => {//takes one from to score when fired
        this.setState(prevState => ({
            score: prevState.score - 1
        }));
    }

    render() {
        const { score } = this.state;
        return (
            <div className='counter'>
                <button className='counter-action decrement' onClick={this.decrementScore}> - </button>
                <span className="counter-score">{score}</span>
                <button className='counter-action increment' onClick={this.incrementScore}> + </button>
            </div>
        );
    }
}
class App extends React.Component {
    state = {
        players: [{
            name: "Guil",
            id: 1
        },
        {
            name: "Treasure",
            id: 2
        },
        {
            name: "Ashley",
            id: 3
        },
        {
            name: "James",
            id: 4
        }]
    }
     handleRemovePlayer = (id) => {
       this.setState(prevState => ({
           players: prevState.players.filter(p => p.id !== id)
        }))
     }

    render() {
        const{players}= this.state;
        return (
            <div className='scoreboard'>
                <Header
                    title="Scoreboard"
                    totalPlayers={players.length}
                />

                {/* Player List */}
                {players.map(player =>
                    <Player
                        name={player.name}
                        id={player.id}
                        key={player.id.toString()}
                        removePlayer={this.handleRemovePlayer}
                    />
                )}
            </div>
        );
    }
}

ReactDOM.render(<App  />, document.getElementById('root')) 
