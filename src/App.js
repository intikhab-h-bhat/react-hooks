import logo from './logo.svg';
import './App.css';

import UseStateDemo from './components/UseStateDemo';
import UseStateWithObj from './components/UseStateWithObj';
import UseRefDom from './components/UseRefDom';


function App() {
  return (
    <div className="App">
      <UseStateDemo />

      <UseStateWithObj />

      <UseRefDom/>
    </div>
  );
}

export default App;
