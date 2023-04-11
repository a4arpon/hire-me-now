import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./BannerAppliedJobs";
import JobItem from "./JobItem";

const AppliedJobs = () => {
  const unFilteredData = useLoaderData();
  const [appliedJobData, setAppliedJobData] = useState(unFilteredData);
  const filterByWhat = (value) => {
    if (value === "on-site") {
      const filteredData = unFilteredData.filter(
        (jobsData) => jobsData.remote_or_onsite === "Onsite"
      );
      setAppliedJobData(filteredData);
    } else if (value === "remote") {
      const filteredData = unFilteredData.filter(
        (jobsData) => jobsData.remote_or_onsite === "Remote"
      );
      setAppliedJobData(filteredData);
    } else {
      setAppliedJobData(unFilteredData);
    }
  };
  if (appliedJobData.length === 0) {
    return (
      <div>
        <Banner />
        <div className="appliedJobContainer">
          <div className="flex justify-end items-center mt-10">
            <select
              className="p-4 rounded-lg bg-gray-200 text-xl font-extrabold"
              onChange={(btn) => filterByWhat(btn.target.value)}
            >
              <option>Filter By</option>
              <option value="remote">Remote</option>
              <option value="on-site">On-site </option>
            </select>
          </div>
          <div className="text-center my-20">
            <h1 className="text-4xl font-extrabold bg-yellow-100 border-yellow-200 px-3 py-5 rounded-xl border-4">
              You are't applied to any job yet.
            </h1>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Banner />
        <div className="appliedJobContainer">
          <div className="flex justify-end items-center mt-10">
            <select
              className="p-4 rounded-lg bg-gray-200 text-xl font-extrabold"
              onChange={(btn) => filterByWhat(btn.target.value)}
            >
              <option>Filter By</option>
              <option value="remote">Remote</option>
              <option value="on-site">On-site </option>
            </select>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            {appliedJobData.map((item) => (
              <JobItem jobData={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default AppliedJobs;
