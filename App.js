import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import ClassEx from './component/ClassEx';
import ClassLife from './component/ClassLife';
import State from './component/State';
import StateEx1 from './component/StateEx1';
import PropsEx from './component/PropsEx';
import JSXEx from './component/JSXEx';
import JSXFunc from './component/JSXFunc';
import JSXattr from './component/JSXattr';
import JSXchild from './component/JSXchild';

function App() {
  const data={name:"Shravani"};
  return (
    <div className="App">
      <header className="App-header">
  
      <Greet />
      <JSXchild />
      <ClassEx />
      <ClassLife />
      <State />
      <StateEx1 />
      <PropsEx val={data} />
      <JSXEx />
      <JSXFunc />
      <JSXattr />
      </header>
    </div>
  );
}

export default App;
