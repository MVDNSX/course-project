import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register'
import Home from './pages/Home'
import { Notfound } from './pages/Notfound';
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/register' element={<Register />}></Route>
				<Route path='/login' element={<Login />}></Route>
				<Route path='/*' element={<Notfound />}></Route>
			</Routes>
		</div>
	);
}

export default App;
