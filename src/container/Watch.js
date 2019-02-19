import React, {Component} from 'react';
import './Watch.css';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import Movies from '../components/Movies/Movies';


export default class Watch extends Component {

    state = {
        movies: [
            {name: 'Avatar', id: 1},
            {name: 'Interstellar', id: 2}
        ],
        currentMovie: {name: '', id: null}
    };

    addMovie = () => {

    };

    render() {
        return (
            <div className="content">
                <Input/>
                <Button/>
                <p className="content__to-watch">To watch list: </p>
                {this.state.movies.map((movie) =>
                    <Movies
                        key={movie.id}
                        movie={movie.name}

                /> )}
            </div>

        );
    }

}