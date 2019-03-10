import React, { Component } from 'react';

import Header from './Header';

import Player from './Player';


class App extends Component {
  state = {
    players: [
      {
        name: "Tay",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

  handleScore = (index, delta) => {
    this.setState(prevState => ({
      score: prevState.players[index].score += delta
    }));
    
  }

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
          players={players}
        />

        {/* Players list */}
        {players.map((player, index) =>
          <Player
            {...player}
            score={player.score}
            key={player.id.toString()}
            index ={index}
            changeScore={this.handleScore}
            removePlayer={this.handleRemovePlayer}
          />
        )}
      </div>
    );
  }
}

export default App;
