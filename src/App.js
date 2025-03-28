import logo from './logo.svg';
import './App.css';

import UseStateDemo from './components/UseStateDemo';
import UseStateWithObj from './components/UseStateWithObj';
import UseRefDom from './components/UseRefDom';
import UseEffectDemo from './components/UseEffectDemo';
import UseMemoDemo from './components/UseMemoDemo';
import UseCallBackDemo from './components/UseCallBackDemo';
import Profile from './components/Profile';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      {/* <UseStateDemo />
      <UseStateWithObj />
      <UseRefDom/>
      <UseEffectDemo/> */}

      {/* <UseMemoDemo/>
        <UseCallBackDemo/> */}
        <Profile/>
        <Footer/>

    </div>
  );
}

export default App;
