import Student from "./Student";

const App = () => {
  const students = [
    { name: "Kumar", age: 22, course: "React JS" },
    { name: "Arun", age: 23, course: "JavaScript" },
    { name: "Priya", age: 21, course: "HTML & CSS" }
  ];

  return (
    <>
      <h1>Student List</h1>

      {students.map((student, index) => (
        <Student
          key={index}
          name={student.name}
          age={student.age}
          course={student.course}
        />
      ))}
    </>
  );
};

export default App;