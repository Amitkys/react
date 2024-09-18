import { useState } from "react";


function App(){
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
    <div>{count}</div>
  )
}
function Button(){
  return(
    <div>
    <button onClick={() => {

    }}>increase</button>
    <button onClick={() => {
      
    }}>decrease</button>
    </div>
    
  )
}

export default App;