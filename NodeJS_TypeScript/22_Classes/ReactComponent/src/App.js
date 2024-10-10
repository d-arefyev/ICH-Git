import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>Children element</div>
      {[1, 2, 3, {}].map((item) => <li>{item}</li>)}
    </div>
  );
}

export default App;
