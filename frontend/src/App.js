import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import BingoDataService from './services/bingo.service';
import ControlPanel from './pages/ControlPanel';
import ErrorPage from './pages/ErrorPage';
import BingoSheet from './pages/BingoSheet';

const router = createBrowserRouter([
	{
		errorElement: <ErrorPage /> 
	},
	{
		path: "/controlpanel",
		element: <ControlPanel />
	},
	{
		path: "/bingo/:id",
		element: <BingoSheet />
	}
]);

const App = () => {
	return <RouterProvider router={router}/>;
}

export default App;
