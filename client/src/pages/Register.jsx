import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {
console.log("BUTTON CLICKED")
    e.preventDefault();

    try {

      setLoading(true);

      const res = await axios.post(
 "https://mern-recruitment-portal-2.onrender.com/api/auth/register"
);

      console.log(res.data);

      alert("Registration Successful");

      navigate("/login");

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">

      <div className="bg-slate-800 p-8 rounded-2xl shadow-xl w-full max-w-md">

        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Create Account
        </h1>

        <form onSubmit={handleSubmit}>

          <div className="mb-4">

            <label className="block text-gray-300 mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <div className="mb-4">

            <label className="block text-gray-300 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <div className="mb-6">

            <label className="block text-gray-300 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 text-white py-3 rounded-lg font-semibold"
          >
            {
              loading
              ? "Creating Account..."
              : "Register"
            }
          </button>

        </form>

        <p className="text-gray-400 text-center mt-6">

          Already have an account?

          <Link
            to="/login"
            className="text-blue-400 ml-2 hover:underline"
          >
            Login
          </Link>

        </p>

      </div>

    </div>

  );

}

export default Register;