import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = props => {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		const getMovies = () => {
			axios
				.get("http://localhost:5000/api/movies")
				.then(response => {
					setMovies(response.data);
				})
				.catch(error => {
					console.error("Server Error", error);
				});
		};

		getMovies();
	}, []);

	return (
		<div className="movie-list">
			{movies.map(movie => (
				<MovieDetails key={movie.id} movie={movie} />
			))}
		</div>
	);
};

const MovieDetails = props => {
	const { id, title, director, metascore, stars } = props.movie;

	return (
		<Link to={`/movies/${id}`}>
			<MovieCard movie={props.movie} />
		</Link>
	);

	return null;
};

export default MovieList;
