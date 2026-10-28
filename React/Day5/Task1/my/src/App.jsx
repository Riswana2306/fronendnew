import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Rendering from "./pages/Rendering"
import Boolean from "./pages/Boolean"
import String from "./pages/String"


const App = () => {
  return (
    <>
    
    <Navbar/>
    
    

    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/render" element={<Rendering/>}/>
      <Route path="/boolean" element={<Boolean/>}/>
      <Route path="/string" element={<String/>}/>



    </Routes>
    
    
    </>
  )
}

export default App
