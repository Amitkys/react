import { RecoilRoot } from "recoil";
import { AddTodo } from "./Components/AddTodo";
import { ShowTodo } from "./Components/ShowTodo";
function App(){
  return(
    <div>
      <RecoilRoot>
        <AddTodo></AddTodo>
        <ShowTodo></ShowTodo>
      </RecoilRoot>
    </div>
  )
}

export default App;