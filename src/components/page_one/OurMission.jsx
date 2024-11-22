import mailIcon from "../../assets/mail.svg";
import phoneIcon from '../../assets/phone.svg'

export default function OurMission() {
  return (
    <section className="bg-white mt-[460px] sm:mt-[0px] sm:w-full sm:h-[715px] font-raleway container sm:mx-auto ml-[14px]">
      <div className="container mx-auto pt-[50px]">
        <div>
          <p className="text-color-about pb-[30px]">Our Mission</p>
          <h1 className="sm:text-[40px] font-bold text-missions-color text-[25px] w-[300px] sm:w-[617px] sm:h-[188px]">
            At SMS Synergy Inc. our core purpose is to unlock
            <span className="text-main-blue"> the potential</span> of those
            advancing positive change in the world.
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mx-auto mt-5 sm:mt-0">
          <div className="text-[20px] text-main-blue flex flex-col gap-5 sm:gap-[30px] w-[310px] h-[73px] sm:h-[33px]">
            <div className="flex flex-row items-center gap-[10px]">
              <div className="w-[48px] h-[48px] bg-main-blue rounded-[10px] flex items-center justify-center">
                <img src={mailIcon} />
              </div>
              <p className="text-[20px]">smssynergyinc@gmail.com</p>
            </div>

            <div className="flex flex-row items-center gap-[10px]">
              <div className="w-[48px] h-[48px] bg-main-blue rounded-[10px] flex items-center justify-center">
                <img src={phoneIcon} />
              </div>
              <p className="text-[20px]">+00 000 000 000</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-end">
            <div className="w-[390px] h-[100px] sm:w-[723px] sm:h-[252px] text-[24px] pt-[60px] text-color-about ">
              Ensuring that all operations comply with Islamic banking and
              finance, Shariah compliance is at the core of our business. We
              focus on developing Shariah-compliant financial products,
              including Murabaha, Musharaka, Ijarah and Sukuk, to meet the
              diverse customer sentiments. <br />
              <br />
              <span className="text-missions-color pb-[50px]">
                Our risk management strategy is tailored to the specific
                challenges in Islamic finance, project finance and corporate
                governance.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
