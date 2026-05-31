import { useEffect, useState } from "react";
import axios from "axios";

function Jobs() {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetchJobs();

  }, []);

  const fetchJobs = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/jobs"
      );

      setJobs(res.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-slate-900 text-white p-10">

      <h1 className="text-5xl font-bold text-center mb-12">
        Available Jobs
      </h1>

      {
        loading
        ? (
          <p className="text-center text-xl">
            Loading Jobs...
          </p>
        )
        : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {
              jobs.length > 0
              ? (
                jobs.map((job) => (

                  <div
                    key={job._id}
                    className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
                  >

                    <h2 className="text-2xl font-bold">
                      {job.title}
                    </h2>

                    <p className="text-gray-300 mt-2">
                      {job.company}
                    </p>

                    <p className="mt-2">
                      📍 {job.location}
                    </p>

                    <p className="mt-2 text-blue-400 font-semibold">
                      💰 {job.salary}
                    </p>

                    <p className="mt-4 text-gray-400">
                      {job.description}
                    </p>

                    <button
                      className="mt-6 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg w-full"
                    >
                      Apply Now
                    </button>

                  </div>

                ))
              )
              : (
                <p className="text-center col-span-3 text-xl">
                  No Jobs Available
                </p>
              )
            }

          </div>
        )
      }

    </div>

  );

}

export default Jobs;