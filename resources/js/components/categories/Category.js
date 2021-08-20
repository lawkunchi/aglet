import React, { Component } from 'react';

export default class Category extends Component {
      render() {
            const {genre} = this.props
            var poster =  'https://image.tmdb.org/t/p/original'+genre.poster;
            return (

                  <div className="card">
                        <figure className="figure">
                              <img src={poster} className="card-img-top" alt="..."/>
                              <figcaption className="figure-caption">{genre.name}</figcaption>
                        </figure>
                  </div>
            
            );
      }
}
