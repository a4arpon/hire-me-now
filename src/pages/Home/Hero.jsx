import React from "react";
import men from "../../assets/AllImages/men.png";
const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="heroText mb-5 lg:w-1/2">
        <h1 className="text-4xl lg:text-7xl font-extrabold mb-5 leading-snug">
          One Step Closer To Your
          <span className="text-violet-400"> Dream Job</span>
        </h1>
        <p className="mb-5 text-gray-500 text-xl font-medium">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="btnPrimary mb-5">Get Started</button>
      </div>
      <div className="heroImg lg:w-1/2">
        <img src={men} alt="" className="h-full w-full" />
      </div>
    </div>
  );
};

export default Hero;
