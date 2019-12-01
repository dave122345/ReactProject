import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


class GameItem extends React.Component {

  constructor() {
    super();
    this.DeleteGame = this.DeleteGame.bind(this);
  }

  DeleteGame(e) {
    console.log("Delete Clicked");
    axios.delete("http://localhost:4000/api/games/" + this.props.games._id)
      .then()
      .catch();

  }

  render() {
    return (
      <div >

        <Card bg="info" border="light" style={{ width: '50%' , height: '50%'}}>
          <Card.Header>{this.props.games.title}</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <img src={this.props.games.poster} width="100%" height="100%"></img>
              <footer>
                {this.props.games.date}
              </footer>
              €{this.props.games.price}
            </blockquote>
          </Card.Body>
          <Button variant="danger" onClick={this.DeleteGame}>Delete</Button>
          <Link to={"/edit/" + this.props.games._id} className="btn btn-primary">Edit</Link>
        </Card>
        <Helmet>
          <style>{'body { background-color: #00ffff; }'}</style>
        </Helmet>
      </div>
    )
  }
}
export default GameItem;
