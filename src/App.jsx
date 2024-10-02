import {  useState } from "react";

function App() {
    let [count, setCount] = useState(0);
  return (
    // const [count, setCount] = useState(0);
    <div>
      <h1>this is main page</h1>
      <button onClick={() => setCount(count + 4)}>{count}</button>
    </div>
  )
}
export default App;