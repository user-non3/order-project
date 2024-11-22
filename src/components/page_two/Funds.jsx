import image from "../../assets/funds.jpg";

export default function Funds() {
  return (
    <section className="container mx-auto  w-full h-[810px] font-raleway mt-[100px]">
      <div className="">
        <div className="flex flex-col gap-[30px]">
          <p className="text-color-about">Funds</p>
          <h1 className="text-[40px] font-bold w-[617px] h-[94px] text-main-blue">
            Venture Capital{" "}
            <span className="text-missions-color">
              {" "}
              and Private Investment Funds
            </span>
          </h1>
        </div>
        {/* GRID TEMPLATE */}
        <div className="grid grid-cols-5 gap-[22px] mt-[55px]">
          <div className="w-[250px] h-[250px] bg-grid-color rounded-[20px] p-[24px] flex flex-col">
            <img
              src={image}
              className="w-[56px] h-[56px] rounded-[16px] mb-[20px]"
            />
            <h1 className="text-main-blue text-[24px] font-bold w-[202px] h-[23px] mb-[15px]">
              BlackRock
            </h1>
            <p className="text-color-about">
              United States, around $9 trillion
            </p>
          </div>
          <div className="w-[250px] h-[250px] bg-grid-color rounded-[20px] p-[24px] flex flex-col">
            <img
              src={image}
              className="w-[56px] h-[56px] rounded-[16px] mb-[20px]"
            />
            <h1 className="text-main-blue text-[24px] font-bold w-[202px] h-[23px] mb-[15px]">
              Sequoia Capital
            </h1>
            <p className="text-color-about w-[202px] h-[46px]">
              United States, approximately $85 billion
            </p>
          </div>
          <div className="w-[250px] h-[250px] bg-grid-color rounded-[20px] p-[24px] flex flex-col">
            <img
              src={image}
              className="w-[56px] h-[56px] rounded-[16px] mb-[20px]"
            />
            <h1 className="text-main-blue text-[24px] font-bold w-[202px] h-[46px] mb-[10px] leading-[23px]">
              Andreessen Horowitz (a16z)
            </h1>
            <p className="text-color-about w-[202px] h-[46px]">
              United States, over $35 billion
            </p>
          </div>
          <div className="w-[250px] h-[250px] bg-grid-color rounded-[20px] p-[24px] flex flex-col">
            <img
              src={image}
              className="w-[56px] h-[56px] rounded-[16px] mb-[20px]"
            />
            <h1 className="text-main-blue text-[24px] font-bold w-[202px] h-[46px] mb-[10px] leading-[23px]">
              SoftBank Vision Fund
            </h1>
            <p className="text-color-about w-[202px] h-[46px]">
              Japan, approximately $100 billion
            </p>
          </div>
          <div className="w-[250px] h-[250px] bg-grid-color rounded-[20px] p-[24px] flex flex-col">
            <img
              src={image}
              className="w-[56px] h-[56px] rounded-[16px] mb-[20px]"
            />
            <h1 className="text-main-blue text-[24px] font-bold w-[202px] h-[46px] mb-[10px] leading-[23px]">
              Tiger Global Management
            </h1>
            <p className="text-color-about w-[202px] h-[46px]">
              United States, around $100 billion
            </p>
          </div>
          <div className="w-[250px] h-[250px] bg-grid-color rounded-[20px] p-[24px] flex flex-col">
            <img
              src={image}
              className="w-[56px] h-[56px] rounded-[16px] mb-[20px]"
            />
            <h1 className="text-main-blue text-[24px] font-bold w-[202px] h-[23px] mb-[10px] leading-[23px]">
              Insight Partners
            </h1>
            <p className="text-color-about w-[202px] h-[46px]">
              United States, over $90 billion
            </p>
          </div>
          <div className="w-[250px] h-[250px] bg-grid-color rounded-[20px] p-[24px] flex flex-col">
            <img
              src={image}
              className="w-[56px] h-[56px] rounded-[16px] mb-[20px]"
            />
            <h1 className="text-main-blue text-[24px] font-bold w-[202px] h-[23px] mb-[10px] leading-[23px]">
              TPG Capital
            </h1>
            <p className="text-color-about w-[202px] h-[46px]">
              United States, around $135 billion
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
