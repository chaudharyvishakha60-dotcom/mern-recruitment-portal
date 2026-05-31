import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async e => {
    e.preventDefault();

    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      form
    );

    localStorage.setItem("token", res.data.token);

    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-8 rounded-lg w-96"
      >
        <h2 className="text-3xl mb-6">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 bg-slate-700"
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
           <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 bg-slate-700"
          onChange={e => setForm({ ...form, password: e.target.value })}
        />

        <button className="bg-blue-600 w-full p-3 rounded">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;