import React from 'react';

const SearchEntry = (props) => {
  const { game } = props;
  return (
    <div>
      {game['product-name']}
    </div>
  )
}

export default SearchEntry;