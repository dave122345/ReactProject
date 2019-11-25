import React from 'react';
import GameItem from './gameItem'

class Games extends React.Component{

    render(){
        return this.props.myGames.map((games)=>{
           
            return <GameItem key={games._id} games={games}></GameItem>
        });
    }
}
export default Games;