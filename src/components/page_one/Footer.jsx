import facebookIcon from "../../assets/socials/facebook.svg";
import youtubeIcon from "../../assets/socials/youtube.png";
import twitterIcon from "../../assets/socials/twitter.svg";
import linkedIcon from "../../assets/socials/linked.svg";

export default function Footer() {
  return (
    <section className="font-raleway">
      <div className="bg-main-blue w-full mt-[1100px] sm:mt-0 h-[425px]">
        <div className="container sm:mx-auto py-[30px] sm:py-[100px] sm:px-[162px] ml-[14px]">
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <div className="flex flex-col gap-[32px]">
              <div className="flex flex-row items-center gap-3 text-white">
                <div className="bg-white rounded-full w-[50px] h-[50px]" />
                <div className="flex flex-col">
                  <h1 className="font-bold leading-[16px] text-[14px]">
                    SMS Synergy Inc.
                  </h1>
                  <p className="mt-1 text-[12px]">Financial advisory and</p>
                  <p className="leading-3 text-[12px]">
                    management consultancy
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 mb-[10px] sm:mb-0">
                <input
                  type="text"
                  className="w-[250px] sm:w-[350px] h-[55px] rounded-[12px] px-[24px] py-[18px] bg-placeholder-color border-[1px] border-white outline-none text-white placeholder-white"
                  placeholder="Enter Your Email"
                />
                <button className="w-[137px] h-[55px] bg-white rounded-[10px] font-bold text-main-blue hover:bg-placeholder-color hover:text-white transition-colors duration-300 border-[1px] border-white">
                  Send
                </button>
              </div>
            </div>
            <div className="text-white ">
              <div className="w-[400px] sm:w-[500px] h-[225px] flex flex-row justify-between text-[14px] sm:text-[16px] mt-5">
                <ul className="leading-[19px] flex flex-col gap-[15px] sm:gap-[25px]">
                  <li>
                    <a href="/home">Home</a>
                  </li>
                  <li>
                    <a href="/about">About company</a>
                  </li>
                  <li>
                    <a href="/services">Services</a>
                  </li>
                  <li>
                    <a href="/projects">Out Projects</a>
                  </li>
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                  <li>
                    <a href="/contacts">Contacts</a>
                  </li>
                </ul>
                <ul className="leading-[19px] flex flex-col gap-[15px] sm:gap-[25px]">
                  <li>
                    <a href="/contact-us">Contact Us</a>
                  </li>
                  <li>
                    <a href="/contact-from">Contact Form</a>
                  </li>
                  <li>
                    <a href="/offices">Our Offices</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-placeholder-color w-full h-[85px] px-3 sm:px-[162px] py-[20px]">
        <div className="container mx-auto">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-white">All Rights Reserved.</h1>
            <div className="flex flex-row gap-[10px]">
              <div className="h-[50px] w-[50px] rounded-full bg-main-blue">
                <img src={facebookIcon} className="p-[15px]" />
              </div>
              <div className="h-[50px] w-[50px] rounded-full bg-main-blue">
                <img src={linkedIcon} className="p-[15px]" />
              </div>
              <div className="h-[50px] w-[50px] rounded-full bg-main-blue">
                <img src={twitterIcon} className="p-[15px]" />
              </div>
              <div className="h-[50px] w-[50px] rounded-full bg-main-blue">
                <img src={youtubeIcon} className="p-[15px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
