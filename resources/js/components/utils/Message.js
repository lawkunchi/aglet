import React, { Component } from 'react';
import  Header from '../navigation/Header.js';
import axios from "axios";


export default class WishListButton extends Component {

      render() {

            const {message} = this.props;

            return (

                  <>
                        <div className="alert alert-success">{message}</div>
                  </>
            
            );
      }
}

