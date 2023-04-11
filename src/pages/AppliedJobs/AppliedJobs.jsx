import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./BannerAppliedJobs";
import JobItem from "./JobItem";

const AppliedJobs = () => {
  const unFilteredData = useLoaderData();
  if (unFilteredData.length === 0) {
    return (
      <div>
        <Banner />
        <div className="appliedJobContainer">
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
            <select className="p-4 rounded-lg bg-gray-200 text-xl font-extrabold">
              <option value="">Filter By</option>
              <option value="">Name</option>
              <option value="">Slavery</option>
            </select>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            {unFilteredData.map((item) => (
              <JobItem jobData={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default AppliedJobs;
