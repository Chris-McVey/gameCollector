import React from 'react';

const axios = require('axios');

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      searchResults: []
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({
      search: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const { search } = this.state;
    this.props.search(search);
    this.setState({
      search: ''
    })

  }



  render() {
    const { search } = this.state;
    return (
      <div>
        Search for games
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleInput} value={search} type="text" />
          <input type="submit" value="Search" />
        </form>
      </div>
    )
  }

}

export default Form;