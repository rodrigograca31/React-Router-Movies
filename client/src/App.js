import React, { useState } from "react";

import SavedList from "./Movies/SavedList";
import { Route } from "react-router-dom";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
	const [savedList, setSavedList] = useState([]);

	const addToSavedList = movie => {
		setSavedList([...savedList, movie]);
	};

	return (
		<div>
			<SavedList list={savedList} />
			<Route
				exact
				path="/"
				component={MovieList}
				// render={props => <MovieList addToSavedList={addToSavedList} />}
			></Route>
			<Route
				exact
				path="/movies/:id"
				// component={Movie}
				render={props => (
					<Movie {...props} addToSavedList={addToSavedList} />
				)}
			></Route>
		</div>
	);
};

export default App;
