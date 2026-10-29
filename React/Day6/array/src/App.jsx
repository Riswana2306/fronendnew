

const App = () => {

const Languages = ["HTML", "CSS", "JavaScript", "React", "Python"];
  return (<>
  <div>

     {Languages.map((m,n)=>(

      <li key={n}>{m}</li>
    
  
     ) )}
  
  </div>
  
  </>)
}

export default App