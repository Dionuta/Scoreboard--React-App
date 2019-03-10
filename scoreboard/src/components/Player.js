import React from 'react'

import Counter from './Counter';

const Player = ({ name, removePlayer, id }) => {
    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
                {name}
            </span>

            <Counter />
        </div>
    );
}

export default Player;