import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";

const ApplyToJob = () => {
  const unFilteredData = useLoaderData();
  const {
    id,
    job_title,
    job_description,
    job_responsibility,
    fulltime_or_parttime,
    educational_requirements,
    company_name,
    contact_information,
    experiences,
    location,
    remote_or_onsite,
    salary,
  } = unFilteredData;
  return (
    <div>
      <Banner />
      <div className="jobContainer">
        <div className="jobDetails">
          <p className="mb-5 text-gray-700">
            <strong>Job Description: </strong> {job_description}
          </p>
          <p className="mb-5 text-gray-700">
            <strong>Job Responsibility: </strong> {job_responsibility}
          </p>
          <p className="mb-5 text-gray-700">
            <strong>Educational Requirements: </strong>
            <br />
            {educational_requirements}
          </p>
          <p className="mb-5 text-gray-700">
            <strong>Experiences: </strong> <br />
            {experiences}
          </p>
        </div>
        <div className="">
          <div className="jobBrief">
            <h3 className="text-black font-extrabold mb-3">Job Details</h3>
            <hr className="bg-black" />
            <div className="my-5">
              <p className="mb-3">
                <strong>Salary : </strong> {salary} (Per Month)
              </p>
              <p className="mb-3">
                <strong>Job Title : </strong> {job_title}
              </p>
            </div>
            <h3 className="text-black font-extrabold mb-3">
              Contact Information
            </h3>
            <hr className="bg-black" />
            <div className="my-5">
              <p className="mb-3">
                <strong>Phone : </strong> {contact_information.phone}
              </p>
              <p className="mb-3">
                <strong>Email : </strong> {contact_information.email}
              </p>
              <p className="mb-3">
                <strong>Address : </strong> {location}
              </p>
            </div>
          </div>
          <button className="btnPrimary my-5 w-full">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default ApplyToJob;
