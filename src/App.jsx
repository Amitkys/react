import { useContext, useState } from "react";
import { CountContext } from "./context";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/count";

// in this app use have to understand prop drilling problme
// here you can saw:
//count component does not use 'setCount' it's taking it and passing
// into button component, that's why this is a problem, we have to fix it.
function App() {

  return(
    <div>
        <RecoilRoot>
            <Count></Count>
        </RecoilRoot>
    </div>
  )
}

function Count(){
    // problew with context API 
    // it re render (it not have any use);
    console.log('count rendered'); 
  return(
    <div>
      <CounteRenderer></CounteRenderer>
     <Button></Button>   
    </div>
  )
}

function CounteRenderer(){
  const count = useRecoilValue(countAtom);
  return(
    <h1>{count}</h1>
  )
}

function Button(){
  const [count, setCount] = useRecoilState(countAtom);
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