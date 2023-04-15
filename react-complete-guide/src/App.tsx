import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItemsTable from './components/ItemsTable';

function App() {
	
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
        <div style = {{paddingLeft:'2rem', margin:0}}><h2>Transactions</h2></div>
				<ItemsTable />
			</header>
		</div>
	);
}

export default App;
