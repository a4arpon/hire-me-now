import React from "react";
import accountImg from "../../assets/Icons/accounts1.png";
import businessImg from "../../assets/Icons/business1.png";
import smedia from "../../assets/Icons/social-media1.png";
import engineerImg from "../../assets/Icons/chip1.png";
const Category = () => {
  const categoryData = [
    { img: accountImg, title: "Account & Finance", jobAvailable: "300" },
    {
      img: businessImg,
      title: "Creative Design",
      jobAvailable: "100+",
    },
    {
      img: smedia,
      title: "Marketing & Sales",
      jobAvailable: "150",
    },
    {
      img: engineerImg,
      title: "Engineering Job",
      jobAvailable: "224",
    },
  ];
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
        {categoryData.map((item) => (
          <div className="catCard">
            <img
              src={item.img}
              alt={item.title}
              className="bg-violet-200 rounded-lg p-5 mb-5"
            />
            <h3 className="text-xl font-extrabold mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.jobAvailable} Jobs Available</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
