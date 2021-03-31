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
      <div>{game['product-name'] || game['product_name']} - {game['console-name'] || game['console_name']} - {game['release-date'] ? game['release-date'].slice(0, 4) : null}</div>
      <div>{game.genre}</div>
      <div>Loose: {game['loose-price'] ? price(game['loose-price']) : price(game['loose_price'])}</div>
      <div>CIB: {game['cib-price'] ? price(game['cib-price']) : price(game['cib_price'])}</div>
      <div>New: {game['new-price'] ? price(game['new-price']) : price(game['new_price'])}</div>
    </div >
  )
}

export default GameEntry;