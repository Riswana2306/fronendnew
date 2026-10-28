
import { Link } from "react-router-dom"
const NavBar =()=>{
  return(<>

  <div className="bg-pink-800 flex justify-start  gap-5 rounded-2xl items-center font-bold text-xl ">
    <div className="mx-5 my-5 ">
      Logo
    </div>
    <div>
    
       <Link className='ml-4 bg-amber-50 p-1.5 rounded-2xl text-center' to='/Home'>Home</Link>
      
      
      
  </div>
  </div>
  
  
  </>)

}
export default NavBar