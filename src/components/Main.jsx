import Navbar from "./Navbar";

export default function Main() {
  return (
    <div className="bg-main-image w-full bg-cover bg-center pt-5">
      <div className="container mx-auto w-[1440px] h-[874px] ">
        <Navbar />
        <section className="mt-[110px] font-raleway" id="main">
          <div className="w-[120px] h-[39px] text-white rounded-lg flex flex-row justify-center items-center backdrop-blur-xl font-normal">
            <h1>For Bussines</h1>
          </div>
          <div className="mt-[24px] text-white">
            <h1 className="text-[56px] font-raleway font-bold tracking-normal leading-[66px]">
              <span className="opacity-35">Expert solutions</span> for the
              growth
              <br /> and success of your business
            </h1>
            <p className="mt-[24px] w-[833px] h-[112px] flex flex-col justify-start gap-[24px] text-[24px] font-normal leading-7">
              Financial Advisor Management Consulting is your reliable partner
              in business consulting. <br />
              We offer strategic solutions to grow, optimize and improve the
              efficiency of your business.
            </p>
          </div>
          <button className="w-[121px] h-[43px] mt-[24px] flex flex-row justify-center font-medium items-center text-main-blue bg-white rounded-[10px] hover:bg-main-blue hover:text-white transition-colors duration-300">
            Contact us
          </button>
          <div className="flex flex-col items-end">
            <div className="w-[260px] h-[230px] flex flex-col justify-end items-start gap-[10px] p-[24px] text-white font-raleway rounded-[20px] backdrop-blur-[30px]">
              <h1 className="text-6xl font-bold">+150</h1>
              <p className="font-normal">satisfied clients</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
