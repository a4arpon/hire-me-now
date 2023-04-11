import React from "react";
import { useLoaderData } from "react-router-dom";

const Blog = () => {
  const blogs = useLoaderData() || [];
  return (
    <div className="container mx-auto mt-14 flex flex-col gap-3 px-3">
      {blogs.map((blog, index) => (
        <div className="border-2 border-gray-500 p-2 rounded-lg" key={index}>
          <h1 className="font-bold text-2xl mt-2">{blog.title}</h1>
          <hr className="border-gray-500 my-5 border" />
          <p className="text-gray-800 text-xl mb-2">{blog.blog}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
