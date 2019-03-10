import React from 'react';
import Stats from './Stats'



const Header = ({ title, players }) => {
    return (
        <header>
            <Stats
             players = {players}
             />
            <h1>{title}</h1>
            
        </header>
    );
}



export default Header