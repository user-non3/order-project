import { useState } from "react";
import Hamburger from "hamburger-react";

export default function Navbar() {
  const [Mobile, setMobile] = useState(false);

  function Handle() {
    if (Mobile) {
      setMobile(!Mobile);
    } else {
      setMobile(!Mobile);
    }
  }

  function Hambunger() {
    return (
      <>
        <div className="animated w-full max-h-full max-w-full h-full my-16">
          <div className="fixed z-10 backdrop-blur-3xl  left-0 top-4 w-full h-full backdrop-grayscale flex items-center justify-center flex-col gap-4 ">
            <ul className="flex flex-col justify-center items-center md:gap-3 gap-5">
              {[
                {
                  title: "About Me",
                  block: "about",
                },
                {
                  title: "skills",
                  block: "skills",
                },
                {
                  title: "project",
                  block: "projects",
                },
              ].map((item) => {
                return (
                  <li key={Math.random()}>
                    <a
                      className="font-semibold text-[16px] capitalize leading-3 "
                      href={`#${item.block}`}
                      onClick={Handle}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
            <button className="flex flex-row gap-1 items-center align-middle rounded py-4 px-5 text-white">
              <span className=" font-semibold leading-5 text-[20px]">
                Russian
              </span>{" "}
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="max-w-[428px] md:max-w-none md:w-full container text-nowrap">
      <nav className="bg-white w-full h-24 rounded-3xl mx-auto flex justify-between p-5 font-raleway overflow-hidden">
        <div className="flex justify-start gap-3">
          <div className="rounded-full bg-main-blue text-main-blue w-[55px] h-[55px] flex flex-col items-center justify-center" />
          <div className="text-main-blue flex flex-col gap-[2px] justify-center">
            <h1 className="font-bold">SMS Synergy Inc.</h1>
            <p className="text-[12px] leading-3 flex flex-col gap-[5px]">
              Financial advisory and
              <span className="text-[12px] block">managment consultancy</span>
            </p>
          </div>
        </div>
        <div className="flex md:hidden">
          <Hamburger toggled={Mobile} toggle={Handle} size={18} />
        </div>

        <ul className="md:flex hidden flex-row items-center md:gap-6">
          {[
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
      {Mobile && <Hambunger />}
    </div>
  );
}
