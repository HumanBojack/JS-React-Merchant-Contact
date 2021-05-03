import React from 'react';
import ReactDOM from 'react-dom';
import Clients from './components/Clients';

const App = () => (
	<div>
		<h1>Hello World</h1>
		<Clients />
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));