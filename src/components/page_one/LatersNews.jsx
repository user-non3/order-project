import arrowRight from "../../assets/arrow_right.svg";
import arrowLeft from "../../assets/arrow_left.svg";
import arrowImg from "../../assets/arrow.svg";

export default function LatersNews() {
  return (
    <section className="w-full h-[1440px] bg-white font-raleway container mx-auto mb-[80px]">
      <div className="bg-[url('../assets/poster_three.png')] bg-cover mt-[500px] sm:mt-0 h-[600px] rounded-[20px] text-white flex items-center px-[150px]">
        <p className="text-[32px] sm:text-[56px] w-[1340px] h-[198px] font-bold sm:leading-[66px] flex flex-col justify-center">
          <span className="opacity-35">SMS Synergy Inc.</span> strives to be a
          trusted partner
          <br />
          for businesses of all sizes, using innovative and practical solutions
          that help achieve success.
        </p>
      </div>
      <div className="container sm:mx-auto ml-[14px] ">
        <div className="pt-[80px] text-color-about">
          <p>Laters News</p>
          <h1 className="pt-[30px] text-main-blue font-bold text-[40px] leading-[47px] w-[340px] sm:w-[617px] h-[94px]">
            <span className="text-missions-color">Latest news from the</span>{" "}
            world of business
          </h1>
        </div>
        <div className="flex flex-row items-end justify-end gap-[30px] sm:gap-[50px] py-[30px] mr-[30px] sm:mr-0">
          <button className="w-[48px] h-[48px] flex flex-row justify-center items-center rounded-[10px] bg-main-blue text-white hover:bg-missions-color transition-colors duration-300">
          <img src={arrowLeft} alt="" />

          </button>
          <button className="w-[48px] h-[48px] flex flex-row justify-center items-center rounded-[10px] bg-main-blue text-white hover:bg-missions-color transition-colors duration-300">
            <img src={arrowRight} alt="" />
          </button>
        </div>
        <div className="flex flex-col sm:flex-row gap-[31px]">
          <div className="w-[400px] h-[560px] bg-cover bg-center sm:w-[460px] sm:h-[560px] rounded-[16px] bg-[url('../assets/poster_two.png')] flex justify-end p-4">
            <p className="w-[110px] h-[35px] bg-text-bg-main/30 backdrop-blur-[30px] rounded-lg text-white flex flex-col items-center justify-center">
              31 October
            </p>
          </div>
          <div className="flex flex-col sm:gap-[27px]">
            <div className="text-main-blue text-[24px] sm:text-[56px] font-bold sm:leading-[66px] w-[300px] sm:w-[509px] h-[115px] sm:h-[264px]">
              <h1>
                Comcast Beats Profit Estimates as Olympics Give Company a Boost
              </h1>
            </div>
            <p className="font-medium hover:text-main-blue transition-colors duration-300 flex flex-row gap-1 items-center">
              Read more 
              <img src={arrowImg} alt="" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
