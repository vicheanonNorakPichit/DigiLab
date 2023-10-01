import React from 'react';
import Instruction from './instruction';
import Equipment from './Equipment';
import Experiment from './Experiment';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Instruction />} />
					<Route path='equipment' element={<Equipment />} />
					<Route path='experiment' element={<Experiment />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
