import React, { Component } from 'react';
import  Movie from './Movie.js';
import Slider from "react-slick";

export default class MovieList extends Component {

    constructor(props) {
            super(props);

            this.state = { 
                  movies: this.props.movies,
            };

      }


      render() {
           const settings = {
                  dots: false,
                  infinite: false,
                  speed: 500,
                  slidesToShow: 9,
                  slidesToScroll: 1,
                  arrows: false
                };

                const {movies, title} = this.props;

            return (

                  <>    
                        <h4 className="category-title text-left">{title}</h4>

                        <Slider {...settings} className="movie-list">
                             { movies.map(movie => {
                                return <Movie  movie={movie} key={movie.id}/>
                            })}
                           
                          </Slider>
                  </>
            
            );
      }
}
