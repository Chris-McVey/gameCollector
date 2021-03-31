import React from 'react';
import Form from './FormComponent.jsx';
import SearchList from './SearchListComponent.jsx';
import CollectionComponent from './CollectionComponent.jsx';


const axios = require('axios');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchResults: [],
      collection: []
    }
    this.getGames = this.getGames.bind(this);
    this.addToCollection = this.addToCollection.bind(this);
  }

  getGames(search) {
    axios.get('/api/group', {
      params: {
        query: search
      }
    }).then((data) => {
      this.setState({
        searchResults: data.data
      })
    }).catch((err) => {
      console.log(err);
    })
  }

  addToCollection(game) {
    this.setState((prevState) => {
      prevState.collection.push(game);
      return {
        collection: prevState.collection
      }
    })
  }



  render() {
    const { searchResults, collection } = this.state;
    return (
      <div id="appContainer">
        <Form search={this.getGames} />
        <SearchList games={searchResults} addGame={this.addToCollection} />
        <CollectionComponent games={collection} />
      </div>
    )
  }
}

export default App;