import { Link } from "react-router-dom"

Link
const Banner =()=>{
    return(<>
    <div className="bg-white -900 gap-7 flex justify-center font-bold p-3 ">
         <Link to="/Boolean" className="bg-blue-500 text-white px-5 py-2 rounded-md no-underline hover:bg-green-500">
  Boolean
</Link>
           <Link to="/Number" className="bg-blue-500 text-white px-5 py-2 rounded-md no-underline hover:bg-green-500">
  Number
</Link>
            <Link to="/string" className="bg-blue-500 text-white px-5 py-2 rounded-md no-underline hover:bg-green-500">
  String
</Link>
    <Link to="/Fasly" className="bg-blue-500 text-white px-5 py-2 rounded-md no-underline hover:bg-green-500">
  Falsy
</Link>
    </div>
    </>)

}
export default Banner