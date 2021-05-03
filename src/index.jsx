import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Clients from './components/Clients';

const App = () => (
	<div>
		<Clients />
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));