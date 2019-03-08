const players = [ 
    {
        name: "Guil",
        score: 50,
        id: 1
    },
    {
        name: "Treasure",
        score: 85,
        id: 2
    },
    {
        name: "Ashley",
        score: 95,
        id: 3
    },
    {
        name: "James",
        score: 80,
        id: 4
    }
];

const Header = ({ title, totalPlayers }) => {
    return (
        <header>
            <h1>{title}</h1>
            <span className='stats'>Player: {totalPlayers}</span>
        </header>
    );
};

const Player = ({ name, score }) => {  // used Destructuring to pass name and score prop to counter 
    return (
        <div className='player'>
            <span className='player-name'>
                {name}
            </span>
            <Counter
                score={score}
            />
        </div>
    );
}

const Counter = ({ score }) => {  // score was passed down from Player 
    return (
        <div className='counter'>
            <button className='counter-action decrement'> - </button>
            <span className="counter-score">{score}</span>
            <button className='counter-action increment'> + </button>
        </div>
    );
}

const App = ({ initialPlayers }) => {
    return (
        <div className='scoreboard'>
            <Header
                title="Scoreboard"
                totalPlayers={initialPlayers.length}
            />

            {/* Player List */}
            {initialPlayers.map( player =>
                <Player
                   {...player}
                    key={player.id.toString()}
                />
            )}
        </div>
    )
}

ReactDOM.render(<App initialPlayers={players} />, document.getElementById('root')) 
