import React from 'react';
import Form from './FormComponent.jsx';
import SearchList from './SearchListComponent.jsx';


const axios = require('axios');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchResults: []
    }
    this.getGames = this.getGames.bind(this);
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


  render() {
    const { searchResults } = this.state;
    return (
      <>
        <Form search={this.getGames} />
        <SearchList games={searchResults} />
      </>
    )
  }
}

export default App;