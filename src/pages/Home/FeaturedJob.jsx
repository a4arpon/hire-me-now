import React from "react";

const FeaturedJob = ({ featuredJob }) => {
  const { job_title, company_name, remote_or_onsite, location, salary } =
    featuredJob;
  return (
    <div className="fCard">
      <h1 className="text-2xl font-extrabold mb-2">{job_title}</h1>
      <p className="text-xl font-bold text-gray-500 mb-2">{company_name}</p>
      <p className="bg-violet-200 border-violet-400 border-2 w-fit p-2 rounded-lg mb-2">
        {remote_or_onsite}
      </p>
      <div className="flex flex-col md:flex-row  justify-between text-xl font-bold text-gray-500 mb-2">
        <div className="flex mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <p>{location}</p>
        </div>
        <div className="flex mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p>{salary}</p>
        </div>
      </div>
      <button className="btnPrimary">View Details</button>
    </div>
  );
};

export default FeaturedJob;
