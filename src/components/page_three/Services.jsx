import imgOne from "../../assets/services_one.png";
import imgTwo from "../../assets/services_two.png";
import imgThree from "../../assets/services_three.png";
import imgFour from "../../assets/services_four.png";
import imgFive from "../../assets/services_five.png";
import imgSix from "../../assets/services_six.png";
import SwiperFile from "./Swiper";

export default function Services() {
  return (
    <section className="font-raleway w-full bg-white container mx-auto text-color-about">
      <div className="flex flex-col justify-start">
        <p className="mt-[80px] mb-[30px]">Services</p>
        <h1 className="text-main-blue text-4xl font-bold">
          <span className="opacity-30">Our</span> Services
        </h1>
        <p className="w-[617px] h-[56px] text-color-about pt-[30px] text-2xl">
          SMS Synergy Inc. combines expertise of all the partners and provides
          an expert service in the following fields
        </p>
      </div>
      {/* GRID TEMPLATE */}
      <div className="grid grid-cols-3 gap-6 mt-[100px] mb-[95px]">
        <div className="w-[430px] h-[330px] bg-grid-color rounded-[20px] flex flex-col p-5 items-center">
          <img
            src={imgOne}
            className="w-[381px] h-[150px] rounded-2xl"
            alt=""
          />
          <div className="flex flex-col justify-start items-start mt-5 gap-4">
            <h1 className="text-main-blue text-2xl font-bold w-[213px] h-[23px]">
              Project Finance
            </h1>
            <p className="text-color-about text-start w-[394px] h-[46px]">
              Ensuring all operations are aligned with Islamic Banking and
              Finance regulations
            </p>
          </div>
        </div>
        <div className="w-[430px] h-[330px] bg-grid-color rounded-[20px] flex flex-col p-5 items-center">
          <img
            src={imgTwo}
            className="w-[381px] h-[150px] rounded-2xl"
            alt=""
          />
          <div className="flex flex-col justify-start items-start mt-5 gap-4">
            <h1 className="text-main-blue text-2xl font-bold w-[213px] h-[23px]">
              Project Finance
            </h1>
            <p className="text-color-about text-start w-[394px] h-[46px]">
              Ensuring all operations are aligned with Islamic Banking and
              Finance regulations
            </p>
          </div>
        </div>
        <div className="w-[430px] h-[330px] bg-grid-color rounded-[20px] flex flex-col p-5 items-center">
          <img
            src={imgThree}
            className="w-[381px] h-[150px] rounded-2xl"
            alt=""
          />
          <div className="flex flex-col justify-start items-start mt-5 gap-4">
            <h1 className="text-main-blue text-2xl font-bold w-[213px] h-[23px]">
              Project Finance
            </h1>
            <p className="text-color-about text-start w-[394px] h-[46px]">
              Ensuring all operations are aligned with Islamic Banking and
              Finance regulations
            </p>
          </div>
        </div>
        <div className="w-[430px] h-[330px] bg-grid-color rounded-[20px] flex flex-col p-5 items-center">
          <img
            src={imgFour}
            className="w-[381px] h-[150px] rounded-2xl"
            alt=""
          />
          <div className="flex flex-col justify-start items-start mt-5 gap-4">
            <h1 className="text-main-blue text-2xl font-bold w-[213px] h-[23px]">
              Project Finance
            </h1>
            <p className="text-color-about text-start w-[394px] h-[46px]">
              Ensuring all operations are aligned with Islamic Banking and
              Finance regulations
            </p>
          </div>
        </div>
        <div className="w-[430px] h-[330px] bg-grid-color rounded-[20px] flex flex-col p-5 items-center">
          <img
            src={imgFive}
            className="w-[381px] h-[150px] rounded-2xl"
            alt=""
          />
          <div className="flex flex-col justify-start items-start mt-5 gap-4">
            <h1 className="text-main-blue text-2xl font-bold w-[213px] h-[23px]">
              Project Finance
            </h1>
            <p className="text-color-about text-start w-[394px] h-[46px]">
              Ensuring all operations are aligned with Islamic Banking and
              Finance regulations
            </p>
          </div>
        </div>
        <div className="w-[430px] h-[330px] bg-grid-color rounded-[20px] flex flex-col p-5 items-center">
          <img
            src={imgSix}
            className="w-[381px] h-[150px] rounded-2xl"
            alt=""
          />
          <div className="flex flex-col justify-start items-start mt-5 gap-4">
            <h1 className="text-main-blue text-2xl font-bold w-[213px] h-[23px]">
              Project Finance
            </h1>
            <p className="text-color-about text-start w-[394px] h-[46px]">
              Ensuring all operations are aligned with Islamic Banking and
              Finance regulations
            </p>
          </div>
        </div>
      </div>
      <div className="bg-grid-color w-full h-[400px] rounded-[20px] flex justify-end items-center px-[50px]">
        <h1 className="text-[60px] font-bold w-[994px] h-[225px] leading-[75px] text-missions-color">
          By combining finance and strategy, we build solutions that stand the
          test of time.
        </h1>
      </div>
      <div className="flex flex-col justify-start">
        <p className="pt-[80px] pb-[30px]">Services</p>
        <h1 className="text-main-blue text-4xl font-bold">
          <span className="opacity-30">Our</span> Services
        </h1>
        <p className="w-[617px] h-[56px] text-color-about pt-[30px] text-2xl">
          SMS Synergy Inc. combines expertise of all the partners and provides
          an expert service in the following fields
        </p>
      </div>
      <div className="flex flex-row items-end justify-end gap-[50px]">
        <button className="swiper-button-prev w-[48px] h-[48px] flex flex-row justify-center items-center rounded-[10px] bg-main-blue text-white hover:bg-missions-color transition-colors duration-300">
          -
        </button>
        <button className="swiper-button-next w-[48px] h-[48px] flex flex-row justify-center items-center rounded-[10px] bg-main-blue text-white hover:bg-missions-color transition-colors duration-300">
          +
        </button>
      </div>
      {/* SWIPER */}
      <div className="mt-[50px]">
        <SwiperFile />
      </div>
    </section>
  );
}
