import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name,setName] = useState("");
  const [text,setText] = useState("");
  const [password, setPassword] = useState("");
  const handler1 = name && text && password;

  return (
    <div className="App">
      <input
        type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <br/>

      <input
        type="text" value={text} onChange={(e) => setText(e.target.value)}/>
         <br/>

      <input
        type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
         <br/>

      <button disabled={!handler1}>Submit</button>
      
    </div>
  );
}

export default App;
