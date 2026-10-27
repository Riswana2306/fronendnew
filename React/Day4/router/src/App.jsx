import components from "./components/NavBar"
import { Route, Routes } from "react-router-dom"
import { Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Help from "./pages/Help"
import NavBar from "./components/NavBar"
const App =()=>{
  return(<>

  <NavBar/>

  <Routes>
    <Route path ="/" element={<Home/>}/>
    <Route path ="/about" element={<About/>}/>
    <Route path ="/contact" element={<Contact/>}/>
    <Route path ="/help" element={<Help/>}/>

  </Routes>

  </>)
}
export default App