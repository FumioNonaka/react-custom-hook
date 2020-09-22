import React from 'react';
import { useCounter } from './useCounter';
import CounterDisplay from './CounterDisplay';
import './App.css';

function App() {
	const { count, decrement, increment } = useCounter();
	return (
    <div className="App">
      <CounterDisplay counter={{ count, decrement, increment }} />
    </div>
	);
}

export default App;
