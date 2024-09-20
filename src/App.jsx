import { useState } from "react";


function App() {
  const [count, setCount] = useState(0);
  return(
    <div>

     <Count count={count}></Count>
     <Button count={count} setCount = {setCount}></Button>
    </div>
  )
}

function Count({count}){
  return(
    <di>
      <h1>{count}</h1>
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