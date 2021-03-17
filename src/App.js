import logo from './logo.svg';
import './App.css';

function xin_chao(params) {
  console.log('object :>> ', object);
   let a = 1;
   delete a;
   let object = {}
   for (name in object) {
    doSomething(name);  // Noncompliant
}
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <div>ASDASDas</div>
          <div>ASDASDas</div>
      </header>
    </div>
  );
}

export default App;
