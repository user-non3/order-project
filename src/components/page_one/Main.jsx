import Navbar from "./Navbar";

export default function Main() {
  return (
    <div className="bg-main-image sm:w-full bg-cover bg-center pt-5 ">
      <div className="container mx-auto w-[412px] sm:w-[1440px] h-[874px]">
        <Navbar />
        <section
          className="mt-[70px] sm:mt-[110px] font-raleway"
          id="main overflow-hidden"
        >
          <div className="w-[120px] h-[39px] text-white rounded-lg flex flex-row justify-center items-center backdrop-blur-xl">
            <h1>For Bussines</h1>
          </div>
          <div className="mt-[15px] sm:mt-[24px] text-white">
            <h1 className="text-[40px] sm:w-full h-[180px] sm:text-[56px] font-raleway font-bold sm:leading-[66px]">
              <span className="opacity-35">Expert solutions</span> for the
              growth
              <br /> and success of your business
            </h1>
            <p className="mt-[70px] text-[16px] sm:mt-[0px] sm:w-[833px] h-[112px] flex flex-col justify-start gap-[24px] sm:text-[24px] font-normal leading-7">
              Financial Advisor Management Consulting is your reliable partner
              in business consulting. <br />
              We offer strategic solutions to grow, optimize and improve the
              efficiency of your business.
            </p>
          </div>
          <button className="w-[121px] h-[43px] mt-[24px] flex flex-row justify-center font-medium items-center text-main-blue bg-white rounded-[10px] hover:bg-main-blue hover:text-white transition-colors duration-300">
            Contact us
          </button>
          <div className="flex flex-col items-end mt-[40px] sm:mt-0">
            <div className="w-[174px] h-[154px] sm:w-[260px] sm:h-[230px] flex flex-col justify-end items-start sm:gap-[10px] p-[24px] text-white font-raleway rounded-[20px] backdrop-blur-[30px]">
              <h1 className="text-[32px] sm:text-6xl font-bold">+150</h1>
              <p className="font-normal">satisfied clients</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
