import './App.css';
import Jatekter from './components/Jatekter.js';
import { KEPEKLISTA } from './components/adat.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">KépGalériaReact</header>
      <article>
      <Jatekter KEPEKLISTA={KEPEKLISTA}/>
      </article>
      <footer>Kocsi Dorottya</footer>
    </div>
  );
}

export default App;
