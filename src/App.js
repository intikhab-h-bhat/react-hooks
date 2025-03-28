import logo from './logo.svg';
import './App.css';

import UseStateDemo from './components/UseStateDemo';
import UseStateWithObj from './components/UseStateWithObj';
import UseRefDom from './components/UseRefDom';
import UseEffectDemo from './components/UseEffectDemo';


function App() {
  return (
    <div className="App">
      <UseStateDemo />

      <UseStateWithObj />

      <UseRefDom/>

      <UseEffectDemo/>
    </div>
  );
}

export default App;
