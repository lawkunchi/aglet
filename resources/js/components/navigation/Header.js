import React, { Component } from 'react';


export default class Header extends Component {
      render() {
            return (

                  <div className="main-header">
                        <ul className="nav">
                              <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="#">Home</a>
                              </li>
                              <li className="nav-item">
                              <a className="nav-link" href="#">Movies</a>
                              </li>
                              <li className="nav-item">
                              <a className="nav-link" href="#">Series</a>
                              </li>
                              <li className="nav-item">
                              <a className="nav-link">Kids</a>
                              </li>


                        </ul>

                        <ul className="nav">
                              <li className="nav-item float-right">
                              <a className="nav-link active" aria-current="page" href="#">Profile</a>
                              </li>

                        </ul>
                  </div>
            
            );
      }
}
