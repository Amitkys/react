import { useState } from "react";
import { CountContext } from "./context";

// in this app use have to understand prop drilling problme
// here you can saw:
//count component does not use 'setCount' it's taking it and passing
// into button component, that's why this is a problem, we have to fix it.
function App() {
  <CountContext.Provider value={count}>
    const [count, setCount] = useState(0);
  </CountContext.Provider>
  return(
    <div>

     <Count count={count} setCount = {setCount}></Count>
    </div>
  )
}

function Count({ setCount}){
  return(
    <di>
      <CounteRenderer></CounteRenderer>
     <Button setCount = {setCount}></Button>   
    </di>
  )
}

function CounteRenderer(){
  const count = 1;
  return(
    <h1>{count}</h1>
  )
}

function Button({count, setCount}){
  const count = 1;
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