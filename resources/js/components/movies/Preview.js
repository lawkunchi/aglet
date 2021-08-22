import React, { Component } from 'react';
import  WishListButton from '../utils/WishListButton.js';

export default class Preview extends Component {
      render() {

            const {title, poster, overview, release, movie} = this.props;

            return (

                  <div className="movie-preview container">
                        <div className="row">
                              <div className="col-10">
                                    <div className="row">
                                          <div className="col-2">
                                               <div className="card">
                                                      <img src={poster} className="card-img-top" alt="..."/>
                                                </div>
                                          </div>
                                          <div className="col-10">
                                                <h4>{title}</h4>
                                                <p>{overview}</p><br/>
                                                <b className="text-white">{release}</b>
                                                
                                          </div>
                                    </div>
                              </div>
                              <div className="col-2">
                                    <a className="btn btn-primary text-uppercase mt-1">Preview</a>
                                    <WishListButton movieId={movie}/>
                              </div>
                        </div>
                  </div>
            
            );
      }
}
