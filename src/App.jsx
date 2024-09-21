import { useContext, useState } from "react";
import { CountContext } from "./context";

// in this app use have to understand prop drilling problme
// here you can saw:
//count component does not use 'setCount' it's taking it and passing
// into button component, that's why this is a problem, we have to fix it.
function App() {
  
    const [count, setCount] = useState(0);

  return(
    <div>
      <CountContext.Provider value={count}>
      <Count  setCount = {setCount}></Count>
     </CountContext.Provider>
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
  const count = useContext(CountContext);
  return(
    <h1>{count}</h1>
  )
}

function Button({ setCount}){
  const count = useContext(CountContext);
  return(
    <div>
      <button onClick={() => {
         setCount(count + 1);
      } }>increase</button>  
      <button onClick={() => {
        setCount(count - 1)
      }}>decrement</button>
    </div>
  )
}

export default App;