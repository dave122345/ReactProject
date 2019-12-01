import React from 'react'
import Games from './games';
import axios from 'axios';
import { Helmet } from 'react-helmet';



class ReadListings extends React.Component {

    state = {
        games: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/games')
            .then((response) => {
                this.setState({ games: response.data.games })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <h1>Game List</h1>
                <Games myGames={this.state.games}></Games>
                <Helmet>
                    <style>{'body { background-color: #00ffff; }'}</style>
                </Helmet>
            </div>
        );
    }
}
export default ReadListings;