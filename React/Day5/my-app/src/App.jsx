import { Routes, Route } from "react-router-dom"
import NavBar from "./component/NavBar"
import Home from "./pages/Home"
import Banner from "./component/Banner"
import String from "./pages/String"
import Boolean from "./pages/Boolean"
import Fasly from "./pages/Fasly"
import Number from "./pages/Number"


  

const App =()=>{
  return<>
  <NavBar/>
  <Banner/>
  


  <Routes>
    
<Route path="/" element={<Home/>} />
<Route path="/boolean" element={<Boolean/>} />
<Route path="/string"  element={<String/>}/>
<Route path ="/Fasly" element={<Fasly/>}/>

<Route path="/Number" element={<Number/>}/>


 </Routes>
  </>

}
export default App