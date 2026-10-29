


import Student from'./component/Student'
const App = () => {
  const name = "Kumar";
const age = 22;
const course = "React JS";
  return (
   <>
   <Student myname={name} myage={age} mycourse={course} />
   </>
  )
}

export default App
