import { BrowserRouter, Route, Router, Routes, useNavigate } from "react-router-dom";
import Dashboard from './Components/Dashboard'
import Landing from "./Components/Landing";

function App() {
  return (
    <div>
      <h1>this is navbar</h1>

      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} ></Route>
          <Route path="/" element={<Landing />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/dashboard')}>dashbard</button>
      <button onClick={() => navigate('/')}>Landing</button>

    </div>
  )
}
export default App;