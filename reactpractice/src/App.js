import logo from './logo.svg';
import './App.css';

import Master from './main/master'


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Master />
    </div>
  );
}

export default App;
