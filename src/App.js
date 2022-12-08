import logo from './logo.svg';
import './App.css';
import { Typewriter } from 'react-simple-typewriter';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <button type="button" class="btn btn-primary">Primary</button>
      <h2>Hello i am a <span className='text-primary'><Typewriter
        words={['Eat', 'Sleep', 'Code', 'Repeat!']}
        loop={false}
        cursor
        cursorStyle='_'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      /></span></h2>
    </div>
  );
}

export default App;
