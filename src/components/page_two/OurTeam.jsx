import img from "../../assets/funds.jpg";

export default function OurTeam() {
  return (
    <section className="container mx-auto font-raleway my-[96px]">
      <div className="">
        <div className="flex flex-col gap-[12px]">
          <p className="text-color-about">Team</p>
          <h1 className="text-missions-color text-[40px] font-bold">
            Our <span className="text-main-blue">Team</span>
          </h1>
          <p className="text-color-about w-[616px] h-[57px] leading-[21px]">
            The firm’s dedicated team collaborates closely with clients,
            building adaptable business models and enhancing competitiveness
            through strategic insights and innovative financial practices
          </p>
        </div>
        {/* GRID TEMPLATE */}
        <div className="grid grid-cols-4 gap-[24px] mt-[40px]">
          <div className="w-[316px] h-[474px] flex flex-col">
            <img
              src={img}
              className="w-[316px] h-[360px] rounded-[20px] mb-[20px] drop-shadow-md"
            />
            <h1 className="w-[150px] h-[28px] text-[24px] font-bold text-main-blue mb-[15px]">
              Liam Patel
            </h1>
            <p className="w-[260px] h-[38px] text-color-about mb-[20px]">
              Market Analysis and Investment Specialist
            </p>
          </div>
          <div className="w-[316px] h-[474px] flex flex-col">
            <img
              src={img}
              className="w-[316px] h-[360px] rounded-[20px] mb-[20px]"
            />
            <h1 className="w-[150px] h-[28px] text-[24px] font-bold text-main-blue mb-[15px]">
              Liam Patel
            </h1>
            <p className="w-[260px] h-[38px] text-color-about mb-[24px]">
              Market Analysis and Investment Specialist
            </p>
          </div>
          <div className="w-[316px] h-[474px] flex flex-col">
            <img
              src={img}
              className="w-[316px] h-[360px] rounded-[20px] mb-[20px]"
            />
            <h1 className="w-[150px] h-[28px] text-[24px] font-bold text-main-blue mb-[15px]">
              Liam Patel
            </h1>
            <p className="w-[260px] h-[38px] text-color-about mb-[24px]">
              Market Analysis and Investment Specialist
            </p>
          </div>
          <div className="w-[316px] h-[474px] flex flex-col">
            <img
              src={img}
              className="w-[316px] h-[360px] rounded-[20px] mb-[20px]"
            />
            <h1 className="w-[150px] h-[28px] text-[24px] font-bold text-main-blue mb-[15px]">
              Liam Patel
            </h1>
            <p className="w-[260px] h-[38px] text-color-about mb-[24px]">
              Market Analysis and Investment Specialist
            </p>
          </div>
          <div className="w-[316px] h-[474px] flex flex-col">
            <img
              src={img}
              className="w-[316px] h-[360px] rounded-[20px] mb-[20px]"
            />
            <h1 className="w-[150px] h-[28px] text-[24px] font-bold text-main-blue mb-[15px]">
              Liam Patel
            </h1>
            <p className="w-[260px] h-[38px] text-color-about mb-[24px]">
              Market Analysis and Investment Specialist
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[url('../assets/footer.png')] bg-cover bg-center w-full h-[300px] rounded-[20px] my-[50px]">
        <div className="flex flex-row items-center justify-between py-[100px] px-[162px]">
          <div className="">
            <h1 className="text-[40px] font-bold leading-[47px] text-white">
              Start your journey in{" "}
              <span className="opacity-35">consulting today</span>
            </h1>
            <p className="w-[729px] h-[38px] text-white leading-[19px] mt-[10px]">
              The firm’s dedicated team collaborates closely with clients,
              building adaptable business models and enhancing competitiveness
              through strategic insights and innovative financial practices
            </p>
          </div>
          <button className="w-[137px] h-[51px] box-border rounded-[10px] bg-white text-main-blue font-medium hover:bg-main-blue hover:text-white transition-colors duration-300">
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
}
