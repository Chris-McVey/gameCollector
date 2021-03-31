import React from 'react';
import GameEntry from './GameEntryComponent.jsx';

class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    }
  }

  componentDidUpdate(prevProps) {
    const { games } = this.props;
    if (prevProps.games !== this.state.games) {
      this.setState({
        games: games
      })
    }

  }


  render() {
    const { games } = this.state;
    return (
      <div id="collection">
        <div>Collection value: $0.00</div>
        {games.map((game) => {
          return <GameEntry key={game.id} game={game} />
        })}
      </div>
    )
  }

}

export default Collection;