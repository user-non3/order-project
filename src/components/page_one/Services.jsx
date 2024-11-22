import img from "../../assets/test.jpg";

export default function Services() {
  return (
    <section
      id="services"
      className="font-raleway bg-white sm:mt-[0px]"
    >
      <div className="text-color-about container ml-[14px] sm:mx-auto">
        <div className="flex flex-col justify-start">
          <p className="pt-[80px] pb-[30px]">Services</p>
          <h1 className="text-main-blue text-4xl font-bold">
            <span className="opacity-30">Our</span> Services
          </h1> 
          {/* <p className="text-[16px] text-wrap h-[56px] text-color-about pt-[30px] sm:text-2xl">
            SMS Synergy Inc. combines expertise of all the partners and provides
            an expert service in the following fields
          </p> */}
        </div>
        {/* GRID TEMPLATE */}
        {/* <div className="grid sm:grid-cols-3 gap-6 mt-[100px]"> */}
          {/* <div className="w-[400px] h-[300px] sm:w-[430px] sm:h-[330px] bg-grid-color rounded-[20px] flex flex-col p-5 items-center">
            <img src={img} className="w-[381px] h-[150px] rounded-2xl" alt="" />
            <div className="flex flex-col justify-start items-start mt-5 gap-4 ml-7 sm:ml-0">
              <h1 className="text-main-blue text-2xl font-bold w-[213px] h-[23px]">
                Project Finance
              </h1>
              <p className="text-color-about text-start w-[394px] h-[46px]">
                Ensuring all operations are aligned with Islamic Banking and
                Finance regulations
              </p>
            </div>
          </div> */}
          {/* <div className="w-[380px] h-[250px] sm:w-[430px] sm:h-[330px] bg-grid-color rounded-[20px] flex flex-col p-5 items-center">
            <img src={img} className="w-[381px] h-[150px] rounded-2xl" alt="" />
            <div className="flex flex-col justify-start items-start mt-5 gap-4">
              <h1 className="text-main-blue text-2xl font-bold w-[213px] h-[23px]">
                Project Finance
              </h1>
              <p className="text-color-about text-start w-[394px] h-[46px]">
                Ensuring all operations are aligned with Islamic Banking and
                Finance regulations
              </p>
            </div>
          </div> */}
          {/* <div className="w-[400px] h-[300px] sm:w-[430px] sm:h-[330px] bg-grid-color rounded-[20px] flex flex-col p-5 items-center">
            <img src={img} className="w-[381px] h-[150px] rounded-2xl" alt="" />
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
          <div className="w-[400px] h-[300px] sm:w-[430px] sm:h-[330px] bg-grid-color rounded-[20px] flex flex-col p-5 items-center">
            <img src={img} className="w-[381px] h-[150px] rounded-2xl" alt="" />
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
          <div className="w-[400px] h-[300px] sm:w-[430px] sm:h-[330px] bg-grid-color rounded-[20px] flex flex-col p-5 items-center">
            <img src={img} className="w-[381px] h-[150px] rounded-2xl" alt="" />
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
          <div className="w-[400px] h-[300px] sm:w-[430px] sm:h-[330px] bg-grid-color rounded-[20px] flex flex-col p-5 items-center">
            <img src={img} className="w-[381px] h-[150px] rounded-2xl" alt="" />
            <div className="flex flex-col justify-start items-start mt-5 gap-4">
              <h1 className="text-main-blue text-2xl font-bold w-[213px] h-[23px]">
                Project Finance
              </h1>
              <p className="text-color-about text-start w-[394px] h-[46px]">
                Ensuring all operations are aligned with Islamic Banking and
                Finance regulations
              </p>
            </div>
          </div> */}
        </div>
        {/* BUTTON */}
        {/* <button className="w-[186px] h-[43px] bg-main-blue mt-[24px] rounded-[10px] text-white hover:text-main-blue hover:bg-white transition-colors duration-300 border-solid border-2 border-main-blue">
          View other services
        </button> */}
      {/* </div> */}
    </section>
  );
}
