import { useContext, useState } from "react";
import { CountContext } from "./context";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
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

function CounteRenderer() {
    const count = useRecoilValue(countAtom);
  
    return (
      <div>
        <h1>{count}</h1>
        <Even></Even>
      </div>
    );
  }
  

function Button(){
//   const [count, setCount] = useRecoilState(countAtom); // not need this 
    const setCount = useSetRecoilState(countAtom);
    console.log('button re render')
  return(
    <div>
      <button onClick={() => {
         setCount( count => count + 1);
      } }>increase</button>  
      <button onClick={() => {
        setCount(count => count - 1)
      }}>decrement</button>
    </div>
  )
}

function Even(){
    const count = useRecoilValue(countAtom);
    return(
        <div>
            {(count % 2 == 0) ? "this is even": null}
        </div>
    )
}

export default App;