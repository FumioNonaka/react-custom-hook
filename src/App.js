import React, { useState } from 'react';
import CounterDisplay from './CounterDisplay';
import './App.css';

const initialCount = 0;
function App() {
	const [count, setCount] = useState(initialCount);
	const decrement = () => setCount(count - 1);
	const increment = () => setCount(count + 1);
	return (
    <div className="App">
      <CounterDisplay counter={{ count, decrement, increment }} />
    </div>
	);
}

export default App;
