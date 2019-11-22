import React from 'react'
import {
    CardMedia,
    Card,
    Collapse,
    CardHeader,
    CardContent,
    CardActionArea,
    IconButton,
    Typography,
    CardActions
}  from "@material-ui/core";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './movieCard.styles.css'

export class MovieCard extends React.Component{
        
        constructor(props){
            super(props)
            
            this.state = {
                modalOpen: false
            }
            
        }
        
        render(){
            
            return(
            <Card className='card-container'>
                <CardActionArea>
                    
                    <CardMedia
                        className='card-image'
                        image={this.props.movie.images[0].url}
                        title='Cartaz'
                    />
                    <CardContent>
                        <CardHeader
                            title={this.props.movie.title}
                            subheader={`Estréia: ${this.props.movie.premiereDate.dayAndMonth}/${this.props.movie.premiereDate.year}`}
                        />
                        <div className='card-genres'>
                            {
                                this.props.movie.genres.map(
                                    (genre, index) => <h3 className='card-genre' key={index} > {genre} </h3>
                                )
                            }
                        </div>
                    </CardContent>
                    <CardActions style={{alignSelf: 'flex-end'}}>
                        <IconButton
                                style={{alignSelf: 'flex-end'}}
                                onClick={() => this.setState({modalOpen: !this.state.modalOpen})}
                                aria-expanded={this.state.modalOpen}
                                aria-label="show more"
                            >
                            <ExpandMoreIcon />
                        </IconButton>
                        
                    </CardActions>
                    
                    <Collapse in={this.state.modalOpen} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {this.props.movie.synopsis}
                            </Typography>
                        </CardContent>
                    </Collapse>
                    
                </CardActionArea>
            </Card>
        )
    }
    
}

/*
<div className="card-container">
                
                <img
                    src={this.props.movie.images[0].url}
                    alt="Poster"
                    className="card-image"
                />
                
                <h1 className='card-title'>{this.props.movie.title}</h1>
    
                <div className='card-genres'>
                    {
                        this.props.movie.genres.map(
                            (genre, index) => <h3 className='card-genre' key={index} > {genre} </h3>
                        )
                    }
                </div>
    
                <label className='card-lancamento'>Data de estréia: {this.props.movie.premiereDate.dayAndMonth}  </label>
                
                <section className='card-sinopse-container' >
                    <button
                        className='waves-effect waves-light btn left blue lighten-1'
                        type='button' onClick={ () => this.setState( {modalOpen: !this.state.modalOpen} ) }>
                        
                        <i className="material-icons left">format_align_left</i>Ver sinopse</button>
                    {
                        this.state.modalOpen ? <span className='card-sinopse-body'>{this.props.movie.synopsis}</span> : null
                    }
                </section>
            
            
            
            </div>
 */
