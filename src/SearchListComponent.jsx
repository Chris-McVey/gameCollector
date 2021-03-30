import React from 'react';
import SearchEntry from './SearchEntryComponent.jsx';

const SearchList = (props) => {
  const { games } = props;
  return (
    <div>
      {games.map((game) => {
        return <SearchEntry key={game.id} game={game} />
      })}
    </div>
  )
}

export default SearchList;