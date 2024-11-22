import React from "react";

import bgImage from "../assets/test.jpg";

export default function Navbar() {
  return (
    <div className="">
      <nav className="bg-white h-24 rounded-3xl container mx-auto flex justify-between p-5 font-raleway">
        <div className="flex justify-start gap-3">
          <div className="rounded-full bg-main-blue text-main-blue w-[55px] h-[55px] flex flex-col items-center justify-center" />
          <div className="text-main-blue flex flex-col gap-[2px] justify-center">
            <h1 className="font-bold">SMS Synergy Inc.</h1>
            <p className="text-[12px]">Financial advisory and</p>
            <p className="text-[12px] leading-3">managment consultancy</p>
          </div>
        </div>
        <ul className="sm:flex hidden flex-row items-center sm:gap-6">
          {[
            {
              title: "Main",
              block: "",
            },
            {
              title: "About",
              block: "about",
            },
            {
              title: "Services",
              block: "services",
            },
            {
              title: "Our Projects",
              block: "projects",
            },
            {
              title: "Our Team",
              block: "team",
            },
            {
              title: "Blog",
              block: "blog",
            },
          ].map((item) => {
            return (
              <li key={Math.random()}>
                <a
                  className="text-[16px] capitalize leading-3 hover:text-missions-color transition-colors duration-300 text-main-blue"
                  href={`/${item.block}`}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
          <button className="bg-main-blue font-medium text-white px-5 py-2 rounded-lg hover:bg-white hover:text-main-blue transition-colors duration-300 border-solid border-2 border-main-blue">
            Contact us
          </button>
        </ul>
      </nav>
    </div>
  );
}
