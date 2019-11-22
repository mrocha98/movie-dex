import React from 'react';
import './Home.css';

// Importando componentes
import { CardList } from '../../components/card-list/card-list.component'
import { SearchField } from '../../components/search-box/search-box.component'


export default class App extends React.Component {
	
	constructor(){
		// Chama o método construtor na classe Component
		super()
		
		this.state = {
			movies: [],
			searchField: ''
		}
		
	}
	// Quando este componente for montado, fazer...
	componentDidMount(){
		fetch('https://cors-anywhere.herokuapp.com/https://api-content.ingresso.com/v0/events/coming-soon/partnership/moviebot?limit=30')
			.then( resp => resp.json() )
			.then( data => this.setState( { movies: data.items } ))
	}
	
	
	render(){
	/*
		Desestruturação "retira" uma propriedade de um objeto
	 	e a salva em uma constante, tornando-o facilmente acessível
	 */
		const { movies, searchField } = this.state
		// Filtrando/buscando dinamicamente de acordo com o input
		const filteredMovies = movies.filter( movie => movie.title.toLowerCase().includes(searchField.toLowerCase()) )
		
		return (
			<div className="App">
				
				<h1 className='app-title'>Em breve nos cinemas</h1>
				
				<SearchField
					placeholder='Search movies...'
					handleChange={ event => this.setState( { searchField: event.target.value } ) }
				/>
				
				<CardList movies={filteredMovies}></CardList>
				
			</div>
		
		);
		
	}
}
