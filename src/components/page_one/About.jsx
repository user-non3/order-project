import arrowImg from "../../assets/arrow.svg";

export default function About() {
  return (
    <section className="bg-white w-full h-[435px] px-[200px] py-[50px]">
      <div className="font-raleway flex flex-col justify-start items-center">
        <p className="w-[69px] h-[19px] text-color-about">About Us</p>
        <h1 className="text-main-blue my-[30px] font-bold text-4xl text-center">
          <span className="opacity-35">Financial Advisor</span> Management
          Consulting
        </h1>
        <p className="text-[16px] sm:text-2xl w-[400px] sm:w-[1040px] sm:h-[140px] text-center text-color-about">
          SMS Synergy Inc. a management consultancy and project finance advisory
          firm, was established
          <span className="text-main-blue">
            {" "}
            in 2011 in the UAE and expanded to the USA in 2020.
          </span>
          <br />
          <br />
          With extensive expertise in Project Finance and Islamic Finance
          advisory, SMS Synergy Inc. provides clients with a unique blend of
          conventional and Sharia-compliant financial solutions.
        </p>
        <div className="text-black mt-[35px] font-medium hover:text-main-blue transition-colors duration-300 w-[300px] flex flex-row items-center justify-center gap-[5px]">
          <a href="#read">Read more</a>
          <img src={arrowImg} />
        </div>
      </div>
    </section>
  );
}
