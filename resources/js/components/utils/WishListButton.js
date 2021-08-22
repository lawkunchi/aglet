import React, { Component } from 'react';
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

            let user_id = localStorage.getItem('user-id');

            console.log(user_id);

            if(user_id != null) {
                  axios.post('http://127.0.0.1:8000/api/movies/favorite/'+id+'/'+user_id)
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

            else {
                  alert("Log in first to continue!");
            }

            

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

