import logo from './logo.svg';
import './App.css';

function App() {
const name = 'Alex'
const x = true

  return (
    <div className="container">
      <h1>Hello From React</h1>
      <h1>Hello {name}</h1>
      <h1>Hello {x ? 'yes' : 'no'}</h1>
    </div>
  );
}

export default App;
