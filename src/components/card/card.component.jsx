import React from 'react'
import './card.styles.css'

export const Card = props => (
    <div className="card-container">

        <img 
            src={props.cinema.images[0].url} 
            alt="cinema icon" 
            className="card-image"
            ></img>
            
        <h1>{props.cinema.name}</h1>

    </div>
)