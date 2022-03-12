import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Login/>}></Route>
				<Route path='/dashboard' element={<Dashboard/>}></Route>
				<Route path='/new' element={<New/>}></Route>
			</Routes>
		</BrowserRouter>
	);
}