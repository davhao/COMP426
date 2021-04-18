import './App.css';
import Login from './components/Login';
import MainPage from './components/MainPage';
import { useState } from 'react';

function App() {
	const [
		loggedIn,
		setLoggedIn
	] = useState(false);

	return !loggedIn ? <Login setLoggedIn={setLoggedIn} /> : <MainPage />;
}

export default App;
