import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {

    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

  }, []);

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");

  };

  return (

    <div className="min-h-screen bg-slate-900 text-white">

      {/* Navbar */}

      <div className="flex justify-between items-center px-10 py-5 bg-slate-800 shadow-lg">

        <h1 className="text-3xl font-bold text-blue-400">
          Candidate Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg"
        >
          Logout
        </button>

      </div>

      {/* Welcome Section */}

      <div className="p-10">

        <div className="bg-slate-800 rounded-2xl p-8 shadow-lg">

          <h2 className="text-4xl font-bold mb-4">
            Welcome {
              user?.name || "Candidate"
            }
          </h2>

          <p className="text-gray-400 text-lg">
            Manage your job applications and profile here.
          </p>

        </div>

        {/* Stats Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

          <div className="bg-slate-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition">

            <h3 className="text-2xl font-semibold">
              Applied Jobs
            </h3>

            <p className="text-5xl font-bold mt-4 text-blue-400">
              12
            </p>

          </div>

          <div className="bg-slate-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition">

            <h3 className="text-2xl font-semibold">
              Saved Jobs
            </h3>

            <p className="text-5xl font-bold mt-4 text-green-400">
              5
            </p>

          </div>

          <div className="bg-slate-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition">

            <h3 className="text-2xl font-semibold">
              Interviews
            </h3>

            <p className="text-5xl font-bold mt-4 text-yellow-400">
              2
            </p>

          </div>

        </div>

        {/* Recent Activity */}

        <div className="bg-slate-800 mt-12 p-8 rounded-2xl shadow-lg">

          <h2 className="text-3xl font-bold mb-6">
            Recent Activity
          </h2>

          <div className="space-y-4">

            <div className="bg-slate-700 p-4 rounded-lg">
              Applied for Frontend Developer at TechCorp
            </div>

            <div className="bg-slate-700 p-4 rounded-lg">
              Saved Backend Developer job
            </div>

            <div className="bg-slate-700 p-4 rounded-lg">
              Interview scheduled with InnovateX
            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;