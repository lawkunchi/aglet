import React, { Component } from 'react';
import  Header from '../navigation/Header.js';
import axios from "axios";
import  WishListButton from '../utils/WishListButton.js';



export default class Banner extends Component {

      constructor(props) {
            super(props);
       
      }

      render() {

            const {poster, title, movie_id} = this.props;
            console.log(movie_id, "movie_id",this.props);

            return (

                  <div className="banner-section">

                        <div className="card w-100 text-white">
                              <figure className="figure">
                                    <img src={poster} className="figure-img img-fluid" alt="movie poster"/>
                              </figure>

                              <div className="card-img-overlay">
                                    <h5 className="card-title">{title}</h5>
                                    <button type="button" className="btn btn-primary mr-5 mt-5">Play Now</button>
                                    <WishListButton movieId={movie_id}/>
                              </div>
                        </div>
                  </div>
            
            );
      }
}

