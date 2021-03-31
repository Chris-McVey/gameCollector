import React from 'react';
import GameEntry from './GameEntryComponent.jsx';

class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      value: 0
    }
  }

  componentDidUpdate(prevProps) {
    const { games } = this.props;
    let newValue = 0;
    games.forEach((game) => {
      newValue += game['loose-price']
    })
    if (this.state.value !== newValue) {
      this.setState({
        value: newValue
      })
    }

    if (prevProps.games !== this.state.games) {

      this.setState({
        games: games,
        value: newValue
      })
    }

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
          return <GameEntry key={game.id} game={game} />
        })}
      </div>
    )
  }

}

export default Collection;