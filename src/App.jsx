import {  RecoilRoot, useRecoilValue } from "recoil";
import { todoFamily } from "./atom";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
    </RecoilRoot>
  )

}
function Todo({id}) {
  const todos = useRecoilValue(todoFamily(id))
  return(
    <div>
      <h1>{todos.title}</h1>
      <h2>{todos.description}</h2>
    </div>
  )
}
export default App;