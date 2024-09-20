import { useState } from "react";


function App() {
  const [count, setCount] = useState(0);
  return(
    <div>

     <Count count={count}></Count>
     <Button></Button>
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

function Button(){
  return(
    <div>
      <button onClick={() =>{

      } }>increase</button>  
      <button onClick={() => {
        
      }}>decrement</button>
    </div>
  )
}

export default App;