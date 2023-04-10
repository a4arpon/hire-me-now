import React from "react";
import accountImg from "../../assets/Icons/accounts1.png";
import businessImg from "../../assets/Icons/business1.png";
import smedia from "../../assets/Icons/social-media1.png";
import engineerImg from "../../assets/Icons/chip1.png";
const Category = () => {
  return (
    <div className="mt-20 container mx-auto px-3">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-5">Job Category List</h1>
        <p className="text-gray-500 mb-5">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="categoryCardContainer">
        <div className="catCard">
          <img
            src={accountImg}
            alt=""
            className="bg-violet-200 rounded-lg p-5 mb-5"
          />
          <h3 className="text-xl font-extrabold mb-3">Account & Finance</h3>
          <p className="text-gray-600">300 Jobs Available</p>
        </div>
        <div className="catCard">
          <img
            src={businessImg}
            alt=""
            className="bg-violet-200 rounded-lg p-5 mb-5"
          />
          <h3 className="text-xl font-extrabold mb-3">Creative Design</h3>
          <p className="text-gray-600">100+ Jobs Available</p>
        </div>
        <div className="catCard">
          <img
            src={smedia}
            alt=""
            className="bg-violet-200 rounded-lg p-5 mb-5"
          />
          <h3 className="text-xl font-extrabold mb-3">Marketing & Sales</h3>
          <p className="text-gray-600">150 Jobs Available</p>
        </div>
        <div className="catCard">
          <img
            src={engineerImg}
            alt=""
            className="bg-violet-200 rounded-lg p-5 mb-5"
          />
          <h3 className="text-xl font-extrabold mb-3">Engineering Job</h3>
          <p className="text-gray-600">224 Jobs Available</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
