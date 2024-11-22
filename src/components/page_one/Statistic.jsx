import posterFour from "../../assets/poster_four.png";

export default function Statistic() {
  return (
    <section className="container sm:mx-auto w-full h-[999px] py-[96px] font-raleway ml-[14px]">
      <div>
        <div className="">
          <p className="text-color-about mb-[12px]">Statistic</p>
          <h1 className="text-missions-color text-[40px] font-bold w-[400px] sm:w-[768px] h-[94px]">
            Statistics and improvement in numbers{" "}
            <span className="text-main-blue">SMS Synergy Inc.</span>
          </h1>
          <p className="text-color-about w-[350px] sm:w-[616px] h-[68px] sm:h-[38px] mt-[160px] sm:mb-[35px] sm:my-[35px]">
            Since its founding in 2011 in the UAE, SMS Synergy Inc. has reached
            11 countries including the US,
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="">
            <div className="flex justify-between sm:gap-[120px]">
              <div className="flex flex-col">
                <h1 className="text-[56px] sm:text-[64px] text-main-blue font-bold">100+</h1>
                <p className="font-bold text-missions-color text-[16px] sm:text-[24px] w-[200px] sm:w-[295px] h-[56px]">
                  Unique projects and approaches
                </p>
                <h1 className="mt-[64px] text-[56px] sm:text-[64px] text-main-blue font-bold">
                  70%
                </h1>
                <p className="font-bold sm:text-[24px] text-missions-color w-[180px] sm:w-[295px] h-[84px]">
                  Employees have undergone additional training and certification
                </p>
              </div>
              <div className="flex flex-col">
                <h1 className="text-[56px] sm:text-[64px] text-main-blue font-bold">
                  $100<span className="text-[18px] sm:text-[24px]">mln</span>
                </h1>
                <p className="font-bold text-missions-color text-[16px] sm:text-[24px] w-[180px] sm:w-[295px] h-[56px]">
                  Growth of investment and capital
                </p>
                <h1 className="mt-[64px] text-[56px] sm:text-[64px] text-main-blue font-bold">50+</h1>
                <p className="font-bold text-missions-color text-[16px] sm:text-[24px] w-[180px] sm:w-[295px] h-[56px]">
                  State and public initiatives.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden sm:flex justify-end">
            <img src={posterFour} className="w-[622px] h-[560px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
