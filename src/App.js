import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import ExampleDetail from "./pages/ExampleDetail"
import SearchResults from "./pages/SearchResults"

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/spot/:spot_name" element={<ExampleDetail/>} />
        <Route path="/search" element={<SearchResults/>} />
      </Routes>
    </main>
  );
}

export default App;
