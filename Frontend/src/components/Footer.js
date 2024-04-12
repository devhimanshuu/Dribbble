/* eslint-disable jsx-a11y/anchor-is-valid */
// Footer.jsx
import React from "react";
import pinklogo from "../assets/images/pink-logo-dribbble-bg.png";
import BallLogo from "../assets/images/dribble-ball-logo-.png";
import SocialIcons from "./social";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 ">
      <div className="container ml-16 mr-0 mt-10">
        <div className=" flex flex-row">
          <div className="">
            <img
              src={pinklogo}
              alt="logo-pink"
              className=" grid cols-span-2 w-36 cursor-pointer"
            />
            <h2 className="line-clamp-3 mt-4 text-gray-600">
              Dribbble is the world's leading community for creatives to share,
              grow, and get hired.
            </h2>
            <div>
              <SocialIcons />
            </div>
          </div>

          <div className="w-full md:w-1/4 mb-4 md:mb-0  mx-6 ">
            <h2 className=" text-base font-semibold mb-2 ">For designers</h2>
            <ul className="space-y-5 text-sm ">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Go Pro!
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Explore design work
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Design blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Overtime podcast
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Playoffs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Weekly Warm-Up
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Refer a Friend
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Code of conduct
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0 order-4  mx-6">
            <h3 className="text-base font-semibold mb-2">Hire designers</h3>
            <ul className="space-y-5 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Post a job opening
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Post a freelance project
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Search for designers
                </a>
              </li>
            </ul>
            <h3 className="text-base font-semibold mb-2 pt-5">Brands</h3>
            <ul className="space-y-5 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Advertise with us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0 order-5  mx-6">
            <h3 className="text-base font-semibold mb-2">Company</h3>
            <ul className="space-y-5 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Media kit
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Cookie policy
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0 order-6 mx-6">
            <h3 className="text-base font-semibold mb-2">Directories</h3>
            <ul className="space-y-5 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Design jobs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Designers for hire
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Freelance designers for hire
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Tags
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Places
                </a>
              </li>
            </ul>
            <h3 className="text-base font-semibold mb-2 pt-5">Design assets</h3>
            <ul className="space-y-5 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Dribbble Marketplace
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Creative Market
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Fontspring
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Font Squirrel
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0 order-7 mx-6">
            <h3 className=" font-semibold mb-2 text-base">Design Resources</h3>
            <ul className="space-y-5 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Freelancing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Design Hiring
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Design Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Design Education
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Creative Process
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Design Industry Trends
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="border-b-2 border-gray-200 mt-20 mb-10"></div>

        <div className=" mt-8 pt-4 grid grid-cols-2  ">
          <div>
            <p className="text-left text-gray-600">
              &copy; 2023 Dribbble. All rights reserved.
            </p>
          </div>
          <div className="grid justify-items-end">
            <p className="text-right text-gray-600 flex flex-row">
              <strong className="text-black">20,501,853</strong> shots dribbbled
              <img
                src={BallLogo}
                alt="ball-logo"
                className="bg-transparent w-10 justify-end img-margin-right-2"
              />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
