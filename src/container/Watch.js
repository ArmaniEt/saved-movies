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

    addMovie = (event) => {
        let name = event.target.value;

        let currentMovie = {...this.state.currentMovie, name: name};

        this.setState({
            ...this.state,
            currentMovie
        })

    };

    addOnClick = (event) => {
        event.preventDefault();

        let date = new Date();
        let id = date.getTime();
        let movie = {...this.state.currentMovie};
        movie.id = id;

        let movies = [...this.state.movies, movie];
        this.setState({
            ...this.state,
            movies,
            currentMovie: {
                name: '',
                id: null
            }
        });
    };

    updateMovies = (event, id) => {
        let movieId = this.state.movies.findIndex(movie => movie.id === id);

        let movies = [...this.state.movies];
        movies[movieId].name = event.target.value;

        this.setState({...this.state, movies})


    };

    render() {
        return (
            <div className="content">
                <Input
                    inputMovie={this.state.currentMovie.name}
                    onAddMovie={this.addMovie}
                />
                <Button
                    onClickAdd={this.addOnClick}
                />
                <p className="content__to-watch">To watch list: </p>
                {this.state.movies.map((movie) =>
                    <Movies
                        key={movie.id}
                        name={movie.name}
                        movieOnChange={(event) => this.updateMovies(event, movie.id)}

                    />)}
            </div>

        );
    }

}