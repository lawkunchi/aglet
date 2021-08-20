import React, { Component } from 'react';
import  Header from '../navigation/Header.js';
import axios from "axios";


export default class WishListButton extends Component {

      constructor(props) {
            super(props);
            this.addToWishList = this.addToWishList.bind(this);

             this.state = { 
                  message: '',
            };
      }

      addToWishList = id => {

            axios.post('http://127.0.0.1:8000/api/movies/favorite/'+id)
            .then(res => {
            alert(res.data.success);
                   
                  this.setState({
                        message: res.data.success
                  })  
            } )
            .catch((err) => {
                  console.log(err);
            })

      }

      render() {

            const {movieId} = this.props;
            console.log(this.state.message)

            return (

                  <>
                       
                        
                        <button type="button" className="btn btn-light mt-5" onClick={() => {this.addToWishList(movieId)}}>Watch List</button>
                  </>
            
            );
      }
}

