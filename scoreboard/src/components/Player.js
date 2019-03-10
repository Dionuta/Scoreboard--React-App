import React from 'react'

import Counter from './Counter';

const Player = ({ name, removePlayer, id, score, changeScore, index}) => {
    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
                {name}
            </span>

            <Counter score = {score } 
            changeScore={changeScore} 
            index = {index}
            />
        </div>
    );
}

export default Player;