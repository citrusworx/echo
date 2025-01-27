import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');

function App(){
	return (
		<h2>Hello, echo</h2>
	);
}

const root = createRoot(container!);
root.render(<App />);
