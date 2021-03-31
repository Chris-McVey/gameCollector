import React from 'react';
import GameEntry from './GameEntryComponent.jsx';

const SearchList = (props) => {
  const { games, addGame } = props;
  return (
    <div id="searchList">
      {games.map((game) => {
        return <GameEntry key={game.id} game={game} addGame={addGame} />
      })}
    </div>
  )
}

export default SearchList;