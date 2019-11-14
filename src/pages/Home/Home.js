import React from 'react';
import './Home.css';

// Importando componentes
import { CardList } from '../../components/card-list/card-list.component'

export default class App extends React.Component {
	
	constructor(){
		// Chama o método construtor na classe Component
		super()
		
		this.state = {
			movies: []
		}
		
	}
	// Quando este componente for montado, fazer...
	componentDidMount(){
		fetch('https://cors-anywhere.herokuapp.com/https://api-content.ingresso.com/v0/events/coming-soon/partnership/moviebot?limit=25')
			.then( resp => resp.json() )
			.then( data => this.setState( { movies: data.items } ))
	}
	
	
	render(){
		
		return (
			<div className="App">
				<CardList movies={this.state.movies}>
				
				</CardList>
			</div>
		
		);
		
	}
}