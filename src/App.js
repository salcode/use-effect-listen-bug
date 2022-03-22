import './App.css';
import { useState } from 'react';
import ButtonWithListener from './components/ButtonWithListener';
import ColorPicker from './components/ColorPicker';

function App() {
  const [color, setColor] = useState('red');
  return (
    <div className="App">
      <header className="App-header">
        <h1>useEffect with Listener</h1>
      </header>
      <ColorPicker
        selectedColor={color}
        setColor={setColor}
      />
      <ButtonWithListener
        onEvent={
          () => alert(`The color is ${color}`)
        }
      />
    </div>
  );
}

export default App;
