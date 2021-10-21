import './App.css';
import Generations from './components/Generations';
import Pokemons from './components/Pokemons';
function App() {
  return (
    <div className="App">
      <Generations />
      {/* <Versions /> */}
      <Pokemons />
    </div>
  );
}

export default App;
