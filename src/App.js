import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Results from './pages/Results';
import Home from './pages/Home';

const App = ({ store }) => (
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home/>}></Route>
				<Route path="/results" element={<Results/>}></Route>

			</Routes>
		</BrowserRouter>
	</Provider >
);

App.propTypes = {
	store: PropTypes.object.isRequired
};

export default App;
