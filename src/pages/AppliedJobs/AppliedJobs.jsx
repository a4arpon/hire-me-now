import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./BannerAppliedJobs";

const AppliedJobs = () => {
  const unFilteredData = useLoaderData();
  console.log(unFilteredData);
  return (
    <div>
      <Banner />
      <div className="jobContainer"></div>
    </div>
  );
};

export default AppliedJobs;
