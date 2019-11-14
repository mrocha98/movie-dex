import React, { useState } from 'react'
import './card.styles.css'

export class Card extends React.Component{
        
        constructor(props){
            super(props)
            
            this.state = {
                modalOpen: false
            }
        }
    
        render(){
        return(
            <div className="card-container" key={this.props.movie.id}>
                
                <img
                    src={this.props.movie.images[0].url}
                    alt="Poster"
                    className="card-image"
                />
                
                <h1 className='card-title'>{this.props.movie.originalTitle}</h1>
                
                <div className='card-genres'>
                    {
                        this.props.movie.genres.map(
                            genre => <h3 className='card-genre'>{genre}</h3>
                        )
                    }
                </div>
                
                
                <section className='card-sinopse-container' >
                    <button  className='waves-effect waves-light btn left blue lighten-1' type='button' onClick={ () => this.setState( {modalOpen: !this.state.modalOpen} ) }>
                        <i className="material-icons left">format_align_left</i>Ver sinopse</button>
                    
                    {
                        this.state.modalOpen? <span className='card-sinopse-body'>{this.props.movie.synopsis}</span>: null
                    }
                
                
                </section>
            
            
            
            </div>
        )
    }
    
}
