import React from 'react'
import './card-list.styles.css'
import { MovieCard } from '../card/movieCard.component'

export const CardList = props => {
    
    return(
        
        <div className='card-list'>
            {
                props.movies !== []?
                    props.movies.map(
                        (movie, index) => <MovieCard key={index} movie={movie} />
                    )
                    : null
            }
        </div>
        
    )
}
