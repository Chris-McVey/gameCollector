import React from 'react';

const GameEntry = (props) => {
  const { game, addGame } = props;
  const price = (number) => {
    let converted = number / 100;
    let string = '$' + converted;
    return string;
  }
  return (
    < div className="gameEntry" onClick={() => addGame(game)} >
      <div>{game['product-name']} - {game['console-name']} - {game['release-date'] ? game['release-date'].slice(0, 4) : null}</div>
      <div>{game.genre}</div>
      <div>Loose: {price(game['loose-price'])}</div>
      <div>CIB: {price(game['cib-price'])}</div>
      <div>New: {price(game['new-price'])}</div>
    </div >
  )
}

export default GameEntry;