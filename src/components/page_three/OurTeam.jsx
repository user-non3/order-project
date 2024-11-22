import img from "../../assets/funds.jpg";

export default function OurTeam() {
  return (
    <section className="container mx-auto font-raleway mt-[100px]">
      <div className="flex flex-col gap-[12px]">
        <p className="text-color-about">Team</p>
        <h1 className="text-missions-color text-[40px] font-bold">
          Our <span className="text-main-blue">Team</span>
        </h1>
        <p className="text-color-about w-[616px] h-[57px] leading-[21px]">
          The firm’s dedicated team collaborates closely with clients, building
          adaptable business models and enhancing competitiveness through
          strategic insights and innovative financial practices
        </p>
      </div>
      {/* GRID TEMPLATE */}
      <div className="grid grid-cols-4 gap-[24px] mt-[40px]">
        <div className="w-[316px] h-[474px] flex flex-col">
          <img
            src={img}
            className="w-[316px] h-[360px] rounded-[20px] mb-[20px] "
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
    </section>
  );
}
