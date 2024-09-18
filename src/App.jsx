import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Landing from "./Components/Landing";
import Dashboard from "./Components/Dashboard";
// import { Dashboard } from "./Components/Dashboard";
// const Dashboard = React.lazy(() => import("./Components/Dashboard"));
// const Landing = React.lazy(() => import("./Components/Landing"));


function App(){
  return(
    <div>
      <BrowserRouter>
        <Appbar/>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/" element={<Landing/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

function Appbar(){
  const navigate = useNavigate();
  return(
    <div>
      <div>
        <button onClick={() => {navigate("/dashboard")}}>got to dashboard</button>
        <button onClick={() => {navigate("/")}}>got to landing</button>
      </div>
    </div>
  )
}

export default App;