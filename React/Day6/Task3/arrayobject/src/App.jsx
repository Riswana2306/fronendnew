

const App = () => {
  const employees = [
  { id: 1, name: "Arun", salary: 25000 },
  { id: 2, name: "Priya", salary: 30000 },
  { id: 3, name: "Rahul", salary: 35000 },
  { id: 4, name: "Divya", salary: 40000 }
];
  return (<>
  <div>
  

    <div>
      <table border="1" cellPadding="10">
        <thead>
           <td>id</td>
          <td>name</td>
          <td>salary</td>
           
        </thead>
        <tbody>
          {employees.map((e,i)=>(
            <tr key={e}>
              <td>{e.id}</td>
            <td>{e.name}</td>
              <td>{e.salary}</td>
            </tr>
           ))}
        

        </tbody>
      </table>
    </div>

 

  </div>
  </>
    
  )
}

export default App