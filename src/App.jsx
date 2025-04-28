import { useState } from 'react'
import axios from 'axios'

function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState('');

  const submitReq = async () => {
    try {
      const response = await axios.post('http://localhost:3000/add', {
        a: a,
        b: b
      });
      const solution = response.data.addition;
      console.log(solution);
      setResult(`The addition is: ${solution}`);
    } catch (error) {
      console.error('Error occurred:', error);
      setResult('Error adding numbers');
    }
  };

  return (
    <>
    <div>
      <input 
        type="text" 
        value={a} 
        onChange={(e) => setA(e.target.value)} 
        placeholder="Enter first number"
      />
      <input 
        type="text" 
        value={b} 
        onChange={(e) => setB(e.target.value)} 
        placeholder="Enter second number"
      />
      <button onClick={submitReq}>submitReq</button>

      <div id="root">
        {result}
      </div>
    </div>
    </>
  )
}

export default App
