import { Link } from "react-router-dom"

const Banner =()=>{
    return(<>
    
    
    <div className="flex justify-center bg-amber-200">
          <Link className='ml-4 bg-amber-50 p-1.5 rounded-2xl text-center' to='/boolean'>Boolean</Link>

        <Link className='ml-4 bg-amber-50 p-1.5 rounded-2xl text-center' to='/string'>String</Link>



    </div>
    </>)

}
export default Banner