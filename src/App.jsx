import { useState } from "react";


function App() {
  const [count, setCount] = useState(0);
  return(
    <div>

     <Count count={count} setCount = {setCount}></Count>
    </div>
  )
}

function Count({count, setCount}){
  return(
    <di>
      <h1>{count}</h1>
     <Button count={count} setCount = {setCount}></Button>
    </di>
  )
}

function Button({count, setCount}){
  return(
    <div>
      <button onClick={() =>{
         setCount(count + 1);
      } }>increase</button>  
      <button onClick={() => {
        setCount(count - 1)
      }}>decrement</button>
    </div>
  )
}

export default App;