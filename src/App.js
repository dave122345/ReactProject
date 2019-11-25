import React from 'react';
import logo from './logo.svg';
import './App.css';
import Listcontent from './components/listContent';
import Header from './components/header';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Creategame from './components/createGame';
import Readlistings from './components/readListings';
import EditListing from './components/editListing';


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
       
          <Navbar bg="danger" variant="light">
          <Navbar.Brand href="#home">Options</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/List">List of games</Nav.Link>
              <Nav.Link href="/create_game">Create listing</Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Listcontent} />
            <Route path="/create_game" component={Creategame} />
            <Route path="/List" component={Readlistings} />
            <Route path="/edit/:id" component={EditListing} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
