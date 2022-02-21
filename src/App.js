import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Results from './pages/Results';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';

const App = ({ store }) => (
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home/>}/>
				<Route path="/results" element={<Results/>}/>
				<Route path="movie/:id" element={<MovieDetail />}/>
				<Route path="*" element={<main style={{ padding: "1rem" }}> <p>There's nothing here!</p> </main>} />
			</Routes>
		</BrowserRouter>
	</Provider >
);

App.propTypes = {
	store: PropTypes.object.isRequired
};

export default App;
