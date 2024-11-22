export default function OurMission() {
  return (
    <section className="bg-white w-full h-[715px] font-raleway  container mx-auto">
      <div className="container mx-auto pt-[50px]">
        <div>
          <p className="text-color-about pb-[30px]">Our Mission</p>
          <h1 className="text-[40px] font-bold text-missions-color w-[617px] h-[188px]">
            At SMS Synergy Inc. our core purpose is to unlock
            <span className="text-main-blue"> the potential</span> of those
            advancing positive change in the world.
          </h1>
        </div>
        <div className="flex flex-row items-center justify-between mx-auto">
          <div className="text-[20px] text-main-blue flex flex-col gap-[30px] w-[252px] h-[23px]">
            <p>smssynergyinc@gmail.com</p>
            <p>+00 000 000 000</p>
          </div>
          <div className="flex flex-col items-start justify-end">
            <div className="w-[723px] h-[252px] text-[24px] pt-[60px] text-color-about ">
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
