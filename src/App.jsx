import { RecoilRoot } from "recoil";
import { AddTodo } from "./Components/AddTodo";
import { ShowTodo } from "./Components/ShowTodo";
import { SearchTodo } from "./Components/SearchTodo";
function App(){
  return(
    <div>
      <RecoilRoot>
        <SearchTodo></SearchTodo>
        <AddTodo></AddTodo>
        <ShowTodo></ShowTodo>
      </RecoilRoot>
    </div>
  )
}

export default App;