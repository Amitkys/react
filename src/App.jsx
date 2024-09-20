import { useState } from "react";

// in this app use have to understand prop drilling problme
// here you can saw:
//count component does not use 'setCount' it's taking it and passing
// into button component, that's why this is a problem, we have to fix it.
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
      <CounteRenderer count = {count}></CounteRenderer>
     <Button count={count} setCount = {setCount}></Button>   
    </di>
  )
}

function CounteRenderer({count}){
  return(
    <h1>{count}</h1>
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