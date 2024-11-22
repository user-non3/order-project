import partnerOne from "../../assets/partner_one.png";
import partnerTwo from "../../assets/partner_two.png";
import partnerThree from "../../assets/partner_three.png";
import partnerFour from "../../assets/partner_four.png";

export default function Partners() {
  return (
    <section
      id="partners"
      className="mt-[1250px] sm:mt-0 sm:w-[1909px] h-[1920px] bg-white font-raleway container mx-auto"
    >
      <div className="bg-[url('../assets/post_one.png')] bg-cover h-[500px] rounded-[20px] text-white flex flex-col items-start justify-center container mx-auto">
        <p className="w-[340px] sm:w-[1035px] h-[150px] text-[40px] sm:text-[64px] font-bold pl-[120px]">
          Achieving business goals with SMS Synergy Inc.
        </p>
      </div>
      <div className="text-color-about container mx-auto mt-[80px] ml-[14px] sm:ml-[0px]">
        <p>Partners</p>
        <h1 className="text-main-blue text-[40px] font-bold mt-[30px]">
          <span className="opacity-30">Our</span> Partners
        </h1>
        <p className="text-color-about w-[380px] sm:w-[617px] sm:h-[112px] mt-[30px] sm:text-2xl text-[16px]">
          We collaborate across a diverse ecosystem of partner organizations in
          the world to drive shared value and innovation. We have high potential
          to partner with the following organizations
        </p>
        {/* GRID TEMPLATE */}
        <div class="grid grid-rows-1 sm:grid-rows-2 sm:grid-flow-col mt-[40px] gap-[24px] mb-[300px]">
          <div class="row-span-8 w-[412px] h-[596px] sm:w-[617px] sm:h-[890px] rounded-[20px] bg-[url('../assets/poster_two.png')] flex flex-col justify-between p-[30px]">
            <div className="w-[260px] h-[230px] bg-text-bg-main/30 backdrop-blur-[30px] rounded-[20px] p-[24px] left-[377px]">
              <p className="text-white font-[24px] text-[24px] mt-[80px]">
                To become our partner, just contact us
              </p>
            </div>
            <div className="w-[113px] h-[43px] bg-text-bg-main/30 rounded-[10px] flex flex-col items-center justify-center backdrop-blur-[20px]">
              <p className="text-white">See more</p>
            </div>
          </div>
          <div class="col-span-4 w-[410px] sm:w-[699px] h-[205px] bg-grid-color rounded-[20px] p-[24px]">
            <img
              src={partnerOne}
              className="mb-[24px] w-[200px] h-[56px] rounded-2xl"
            />
            <h1 className="text-main-blue text-[16px] sm:text-[24px] font-bold">
              World Bank Group (WBG)
            </h1>
            <p className="text-color-about">
              Includes the International Bank for Reconstruction and Development
              (IBRD) and International Development Association (IDA).
            </p>
          </div>
          <div class="col-span-4 w-[410px] sm:w-[699px] h-[205px] bg-grid-color rounded-[20px] p-[24px]">
            <img
              src={partnerTwo}
              className="mb-[24px] w-[200px] h-[56px] rounded-2xl"
            />
            <h1 className="text-main-blue text-[16px] sm:text-[24px] font-bold">
              Government Pension Fund Global (Norway)
            </h1>
            <p className="text-color-about">
              Also known as the Norwegian Oil Fund.
            </p>
          </div>
          <div class="col-span-4 w-[410px] sm:w-[699px] h-[205px] bg-grid-color rounded-[20px] p-[24px]">
            <img
              src={partnerThree}
              className="mb-[24px] w-[200px] h-[56px] rounded-2xl"
            />
            <h1 className="text-main-blue text-[16px] sm:text-[24px] font-bold">
              Abu Dhabi Investment Authority (ADIA)
            </h1>
            <p className="text-color-about">
              Sovereign wealth fund of Abu Dhabi, UAE.
            </p>
          </div>
          <div class="col-span-4 w-[410px] sm:w-[699px] h-[205px] bg-grid-color rounded-[20px] p-[24px]">
            <img
              src={partnerFour}
              className="mb-[24px] w-[200px] h-[56px] rounded-2xl"
            />
            <h1 className="text-main-blue text-[16px] sm:text-[24px] font-bold">
              Kuwait Investment Authority (KIA)
            </h1>
            <p className="text-color-about">Kuwait's sovereign wealth fund.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
