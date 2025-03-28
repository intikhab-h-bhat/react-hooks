import logo from './logo.svg';
import './App.css';

import UseStateDemo from './components/UseStateDemo';
import UseStateWithObj from './components/UseStateWithObj';
import UseRefDom from './components/UseRefDom';
import UseEffectDemo from './components/UseEffectDemo';
import UseMemoDemo from './components/UseMemoDemo';

function App() {
  return (
    <div className="App">
      {/* <UseStateDemo />
      <UseStateWithObj />
      <UseRefDom/>
      <UseEffectDemo/> */}

      <UseMemoDemo/>
    </div>
  );
}

export default App;
