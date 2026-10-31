import { useState } from "react"

const App =()=>{
  const[Riswana,setRiswana]=useState("Arun")

  return(<>
  <h1>
    {Riswana}

  </h1>
  <button onClick={()=>setRiswana("kumar")} className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-green-500 alian-center">button click</button>
  
  
  
  </>)


}
export default App