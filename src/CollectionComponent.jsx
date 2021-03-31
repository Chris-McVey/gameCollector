import React from 'react';
import GameEntry from './GameEntryComponent.jsx';
const axios = require('axios');

class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      value: 0
    }
    this.removeGame = this.removeGame.bind(this);
  }

  componentDidMount() {
    const { games } = this.props;

  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const { games } = this.props;
      let newValue = 0;

      games.forEach((game) => {
        game['loose-price'] ? newValue += game['loose-price'] : newValue += game['loose_price']
      })
      if (this.state.value !== newValue) {
        this.setState({
          value: newValue
        })
      }

      if (prevProps.games !== this.state.games) {

        this.setState({
          games: games
        })
      }
    }
  }

  removeGame(game) {
    let { games } = this.state;
    let { id } = game;
    let price = game['loose-price'] || game['loose_price'];
    for (let i = 0; i < games.length; i++) {
      if (games[i].id === id) {
        games.splice(i, 1);
      }
    }
    this.setState((prevState) => {
      return {
        games: games,
        value: prevState.value - price
      }
    })
    axios.put('/api/remove', {
      id
    }).catch((err) => {
      console.log(err);
    })
  }


  render() {
    const { games, value } = this.state;
    const price = (number) => {
      let converted = number / 100;
      let string = '$' + converted;
      return string;
    }
    return (
      <div id="collection">
        <div>Collection value: {value === 0 ? '$0.00' : price(value)}</div>
        {games.map((game) => {
          return <GameEntry key={game.id} game={game} addGame={this.removeGame} />
        })}
      </div>
    )
  }

}

export default Collection;