import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="flex flex-col items-center justify-center h-screen text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold"
        >
          Find Your Dream Job
        </motion.h1>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl">
          Explore thousands of opportunities and build your career.
        </p>

           <div className="mt-8 flex gap-4">
          <Link
            to="/jobs"
            className="bg-blue-600 px-6 py-3 rounded-lg"
          >
            Explore Jobs
          </Link>

          <Link
            to="/register"
            className="border border-white px-6 py-3 rounded-lg"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;