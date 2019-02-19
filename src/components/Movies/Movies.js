import React, {Component} from 'react';
import './Movies.css';
// pass movie in props from Watch.js
// add an onChange handler

export default class Movies extends Component{


    render(){
        return(
            <ul className="movies">
                <li className="movies__items">
                    <input className="movies__input" value={this.props.movie} type="text"/>
                </li>
            </ul>
        )
    }

}