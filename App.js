import './App.css';

import ControlForm from "./component/ControlForm";
import ControlForm1 from "./component/ControlForm1";
import UncontrolForm from "./component/UncontrolForm";
import UncontrolForm1 from "./component/UncontrolForm1";
import MemoHook from "./component/MemoHook";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h3>Controlled Component</h3>
      <ControlForm />
       <h4>Controlled Component using func</h4>
      <ControlForm1 />
       <h3>UnControlled Component</h3>
      <UncontrolForm />
       <h4>UnControlled Component using class</h4>
      <UncontrolForm1 />
      <counter />

      <MemoHook />
      
      </header>
    </div>
  );
}

export default App;