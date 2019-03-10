import React, {Component} from 'react';

import Header from './Header';

import Player from './Player';






class App extends Component {
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
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    const { players } = this.state
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          totalPlayers={players.length}
        />

        {/* Players list */}
        {players.map(player =>
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
