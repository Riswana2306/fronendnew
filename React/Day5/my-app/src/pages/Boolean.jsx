import { Link } from "react-router-dom"

const Boolean=()=>{
 let value = true

    return(
    <>
<div className='bg-green-300 p-10'>
        <div>
        
            {value?"This is React":"This is Not React"}
        </div>
        
    </div>

</>)
}
export default Boolean