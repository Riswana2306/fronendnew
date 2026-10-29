
const Student = () => {
    const studentS = {
  name: "Arun",
  age: 21,
  department: "Computer Science",
  city: "Chennai"
};
  return (
    <>
    <div>
        <h3>{studentS.name}</h3>
        <h3>{studentS.age}</h3>
        <h3>{studentS.department}</h3>
        <h3>{studentS.city}</h3>
    </div>

    </>
  )
}

export default Student