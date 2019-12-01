import React from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { newExpression } from '@babel/types';

class CreateGame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Title: '',
      Date: '',
      Poster: '',
      Price: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGameTitleChange = this.handleGameTitleChange.bind(this);
    this.handleGameDateChange = this.handleGameDateChange.bind(this);
    this.handleGamePosterChange = this.handleGamePosterChange.bind(this);
    this.handleGamePriceChange = this.handleGamePriceChange.bind(this);
  }

  handleGameTitleChange(e) {
    this.setState({ Title: e.target.value });
  }

  handleGameDateChange(e) {
    this.setState({ Date: e.target.value });
  }

  handleGamePosterChange(e) {
    this.setState({ Poster: e.target.value });
  }

  handleGamePriceChange(e) {
    this.setState({ Price: e.target.value });
  }

  handleSubmit(e) {
    alert(this.state.Title + "      " + this.state.Date
      + "       " + this.state.Poster + "     " + this.state.Price);
    e.preventDefault();


    const newGame = {
      title: this.state.Title,
      date: this.state.Date,
      poster: this.state.Poster,
      price: this.state.Price
    };
    axios.post('http://localhost:4000/api/games', newGame)
      .then()
      .catch();


    this.setState({
      Title: '',
      Date: '',
      Poster: '',
      Price: ''
    });
  }

  render() {
    return (

      <div>
        <h1>Create game listing</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>Game Title</label>
            <input
              type='text'
              className='form-control'
              value={this.state.Title}
              onChange={this.handleGameTitleChange}
            ></input>
          </div>
          <div className='form-group'>
            <label>Game release date (format DD/MM/YYYY)</label>
            <input
              type='text'
              className='form-control'
              value={this.state.Date}
              onChange={this.handleGameDateChange}
            ></input>
          </div>
          <div className='form-group'>
            <label>game Poster Url</label>
            <textarea
              row='3'
              className='form-control'
              value={this.state.Poster}
              onChange={this.handleGamePosterChange}
            ></textarea>

            <label>game Price</label>
            <textarea
              className='form-control'
              value={this.state.Price}
              onChange={this.handleGamePriceChange}
            ></textarea>
          </div>
          <div>
            <input
              type="submit"
              value="Add Game">
            </input>

          </div>
        </form>
        <Helmet>
          <style>{'body { background-color: #00ffff; }'}</style>
        </Helmet>
      </div>
    );
  }
}

export default CreateGame;