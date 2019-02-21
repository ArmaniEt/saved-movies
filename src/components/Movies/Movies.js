import React, {Component} from 'react';
import './Movies.css';
// pass movie in props from Watch.js
// add an onChange handler

export default class Movies extends Component{

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.name !== this.props.name;
    }

    render(){
        return(
            <ul className="movies">
                <li className="movies__items">
                    <input onChange={this.props.movieOnChange} className="movies__input" value={this.props.name} type="text"/>
                    <i onClick={this.props.movieDelete} className="far fa-trash-alt"> </i>
                </li>
            </ul>
        )
    }

}