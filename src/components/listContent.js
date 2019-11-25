import React from 'react';
import {Helmet} from 'react-helmet';
import '../App.css';

class ListContent extends React.Component {



  render() {
    return (
      <div>
        <h1>Main Menu for Game Database</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>

        <h3>Please pick from the Navigation bar above to choose what to do.</h3>

        <p>to create a game listing you will need: the year of release, Price, Name and cover Image associated with it.</p>
        <p>the game will be listed within the list page and can be deleted/edited from there.</p>
        <Helmet>
                <style>{'body { background-color: #00ffff; }'}</style>
        </Helmet>
      </div>
    );
  }
}

export default ListContent;