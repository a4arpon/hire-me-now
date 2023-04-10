import React from "react";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="container mx-auto px-3">
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-5 gap-4">
          <div>
            <h1>CareerHub</h1>
            <p>
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
          </div>
          <div className="pl-0 md:pl-4 lg:pl-8">
            <h1>CareerHub</h1>
            <p>
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
