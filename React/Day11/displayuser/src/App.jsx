
import React, { useState, useEffect } from "react";

const App = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !username) {
      alert("Fill all fields");
      return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Enter 10 digit phone number");
      return;
    }

    const newUser = { name, email, phone, username };

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser)
    })
      .then(res => res.json())
      .then(data => {
        setUsers([...users, data]);

        setName("");
        setEmail("");
        setPhone("");
        setUsername("");

        alert("Registered Successfully");
      });
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl text-center font-bold">
        User Registration
      </h1>

      <form onSubmit={handleSubmit} className="w-80 mx-auto mt-5">

        <input className="border p-2 w-full mb-3"
          placeholder="Name" value={name}
          onChange={e => setName(e.target.value)} />

        <input className="border p-2 w-full mb-3"
          placeholder="Email" type="email" value={email}
          onChange={e => setEmail(e.target.value)} />

        <input className="border p-2 w-full mb-3"
          placeholder="Phone" value={phone}
          onChange={e => setPhone(e.target.value)} />

        <input className="border p-2 w-full mb-3"
          placeholder="Username" value={username}
          onChange={e => setUsername(e.target.value)} />

        <button className="bg-blue-500 text-white p-2 w-full">
          Register
        </button>

      </form>

      <h2 className="text-xl text-center font-bold mt-6">
        Registered Users
      </h2>

      <table className="border mx-auto mt-4">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Username</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={user.id || index}>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.phone}</td>
              <td className="border p-2">{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default App;
