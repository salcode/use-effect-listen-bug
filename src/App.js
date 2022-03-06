import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('red');
  return (
    <div className="App">
      <header className="App-header">
        <h1>useEffect with Listener</h1>
      </header>
    </div>
  );
}

export default App;
