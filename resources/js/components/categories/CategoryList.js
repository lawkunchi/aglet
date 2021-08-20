import React, { Component } from 'react';
import  Category from './Category.js';
import axios from "axios";
import Slider from "react-slick";

export default class CategoryList extends Component {

      constructor(props) {
            super(props);


            this.state = { 
                  genres: [],
            };
      }


      componentDidMount() {
           axios.get('http://127.0.0.1:8000/api/movies/genres')
            .then(res => {
                  this.setState({
                        genres: res.data.data,
                  })
            } )
            .catch((err) => {
                  console.log(err);
            })

      }

      render() {

             const settings = {
                  dots: false,
                  infinite: false,
                  speed: 500,
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  arrows: false
                };
           
            return (

                  <>
                        <Slider {...settings} className="category-list">
                              { this.state.genres.map(genre => {
                              return <Category  genre={genre} key={genre.id}/>
                              })}
                        </Slider>
                  </>
            
            );
      }
}
