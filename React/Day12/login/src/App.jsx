
import React, { useState } from "react";

const App = () => {

  const [page, setPage] = useState("register");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const register = (e) => {
    e.preventDefault();
    setUser({ name, email, password });
    setPage("login");
  };

  const login = (e) => {
    e.preventDefault();

    if (email === user.email && password === user.password) {
      setPage("dashboard");
    } else {
      alert("Invalid Details");
    }
  };

  return (
    <div className="p-8">

      {page === "register" && (
        <form onSubmit={register}>
          <h1>Register</h1>
          <input placeholder="Name" required onChange={e => setName(e.target.value)} />
          <input placeholder="Email" required type="email" onChange={e => setEmail(e.target.value)} />
          <input placeholder="Password" required type="password" onChange={e => setPassword(e.target.value)} />
          <button>Register</button>
        </form>
      )}

      {page === "login" && (
        <form onSubmit={login}>
          <h1>Login</h1>
          <input placeholder="Email" type="email" required value={email} onChange={e => setEmail(e.target.value)} />
          <input placeholder="Password" type="password" required value={password} onChange={e => setPassword(e.target.value)} />
          <button>Login</button>
        </form>
      )}

      {page === "dashboard" && (
        <>
          <h1>Dashboard</h1>
          <h3>Name: {user.name}</h3>
          <h3>Email: {user.email}</h3>
          <button onClick={() => setPage("login")}>Logout</button>
        </>
      )}

    </div>
  );
};

export default App;
