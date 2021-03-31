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