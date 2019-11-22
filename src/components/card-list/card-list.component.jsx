import React from 'react'
import './card-list.styles.css'
import { Card } from '../card/card.component'

export const CardList = props => {
    
    return(
        
        <div className='card-list'>
            {
                props.movies !== []?
                    props.movies.map(
                        (movie, index) => <Card key={index} movie={movie} />
                    )
                    : null
            }
        </div>
        
    )
}
