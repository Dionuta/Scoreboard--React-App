import React from 'react';

const Header = ({title, totalPlayers}) => {
  return (
    <header>
      <h1>{ title }</h1>
      <span className="stats">Players: {totalPlayers}</span> 
    </header>
  );
}

class Counter extends React.Component {
  state = { 
    score: 0 
  };
  
  incrementScore = () => {
    this.setState( prevState => ({
      score: prevState.score + 1
    }));
  }

  decrementScore = () => {
    this.setState( prevState => ({
      score: prevState.score - 1
    }));
  }

  render() {
    const{decrementScore, incrementScore}=this;
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={decrementScore}> - </button>
        <span className="counter-score">{ this.state.score }</span>
        <button className="counter-action increment" onClick={incrementScore}> + </button>
      </div>
    );
  }
}
  
const Player = ({name, removePlayer, id}) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() =>removePlayer(id)}>✖</button>
        { name }
      </span>

      <Counter />
    </div>
  );
}

class App extends React.Component {
  state = {
    players: [
      {
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
      }
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    const{players} = this.state
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          totalPlayers={players.length} 
        />
  
        {/* Players list */}
        {players.map( player =>
          <Player 
            {...player}
            key={player.id.toString()} 
            removePlayer={this.handleRemovePlayer}           
          />
        )}
      </div>
    );
  }
}

export default App;
