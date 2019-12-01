import React from 'react';
import { Helmet } from 'react-helmet';
import '../App.css';

class Home extends React.Component {



  render() {
    return (
      // Home page
      <div>
        <h1>Main Menu for Game Shop Database</h1>


        <h3>Please pick from the Navigation bar above to choose what to do.</h3>
       
        <h1>How to use this database</h1>
        <p>To create a game listing you will need: the date of release (if not comfirmed or unknown state date as TBC), 
          Price, Name and cover Image associated with it.</p>
        <p>The game will be listed within the list page and can be deleted/edited from there.</p>
        <p>Not all games need to be in this database you should only put incoming game titles here or
          brand new titles of at least a month old.</p>
        <Helmet>
          <style>{'body { background-color: #00ffff; }'}</style>
        </Helmet>
      </div>
    );
  }
}

export default Home;