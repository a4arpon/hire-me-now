import React from "react";
import groupImg from "../../assets/Icons/Group9969.png";
const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="container mx-auto px-3">
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-5 gap-4 text-gray-400">
          <div className="mb-5">
            <h1 className="text-3xl font-extrabold mb-4 text-white">
              HiremeNow
            </h1>
            <p className="mb-4">
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
            <img src={groupImg} alt="" />
          </div>
          <div className="pl-0 md:pl-4 lg:pl-8">
            <p className="text-xl font-extrabold text-white mb-4">Company</p>
            <p className="mb-3">About Us</p>
            <p className="mb-3">Work</p>
            <p className="mb-3">Latest News</p>
            <p className="mb-3">Careers</p>
          </div>
          <div className="pl-0 md:pl-4 lg:pl-8">
            <p className="text-xl font-extrabold text-white mb-4">Product</p>
            <p className="mb-3">Prototype</p>
            <p className="mb-3">Plans & Pricing</p>
            <p className="mb-3">Customers</p>
            <p className="mb-3">Integrations</p>
          </div>
          <div className="pl-0 md:pl-4 lg:pl-8">
            <p className="text-xl font-extrabold text-white mb-4">Support</p>
            <p className="mb-3">Help Desk</p>
            <p className="mb-3">Sales</p>
            <p className="mb-3">Become a Partner</p>
            <p className="mb-3">Developers</p>
          </div>
          <div className="pl-0 md:pl-4 lg:pl-8">
            <p className="text-xl font-extrabold text-white mb-4">Contact</p>
            <p className="mb-4">524 Broadway , NYC</p>
            <p className="mb-4">+1 777 - 978 - 5570</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
