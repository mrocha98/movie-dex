import React from 'react';
import './App.css';

// Importando componentes
import { CardList } from './components/card-list/card-list.component'

export default class App extends React.Component {

  constructor(){
    // Chama o método construtor na classe Component
    super()

    this.state = {
      movies: [],
      cinemas: []
    }

  }
  // Quando este componente for montado, fazer...
  componentDidMount(){
    fetch('https://cors-anywhere.herokuapp.com/https://api-content.ingresso.com/v0/theaters/city/46/partnership/moviebot?api_key=moviebot')
      .then( resp => resp.json() )
      .then( data => this.setState( { cinemas: data.items } ))
  }


  render(){

    return (
      <div className="App">
        <CardList>
          {
            this.state.cinemas !== []? this.state.cinemas.map(
            cinema => <h1 key={cinema.id}>{cinema.name}</h1>
            ) 
            
            : null
          }
        </CardList>
      </div>

    );

  }
}
