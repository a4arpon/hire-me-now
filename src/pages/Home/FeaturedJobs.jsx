import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import FeaturedJob from "./FeaturedJob";

const FeaturedJobs = () => {
  const jobDataInit = useLoaderData();
  const [jobData, setJobData] = useState(0);
  
  return (
    <div className="container mx-auto px-3 mt-20">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-5">Featured Jobs</h1>
        <p className="text-gray-500 mb-5">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-3">
        {jobDataInit.map((jobDataInit) => (
          <FeaturedJob featuredJob={jobDataInit} key={jobDataInit.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
