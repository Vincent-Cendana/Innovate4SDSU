import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </main>
  );
}

export default App;
