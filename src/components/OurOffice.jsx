import officeOne from "../assets/office_one.png";

export default function OurOffice() {
  return (
    <section className="container mx-auto w-full h-[1150px] font-raleway">
      <div className="">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <p className="text-color-about mb-[12px]">Our office</p>
            <h1 className="text-missions-color text-[40px] font-bold w-[768px] h-[94px]">
              Addresses
              <span className="text-main-blue"> of our offices</span>
            </h1>
          </div>
        </div>
        <div className="flex flex-row gap-[24px]">
          <div className="w-[600px] h-[294px] rounded-[20px]">
            <img src={officeOne} />
          </div>
          <div className="text-main-blue flex flex-col gap-[30px]">
            <h1 className="text-[40px] font-bold w-[715px] h-[94px] mb-[15px]">
              Headquartered{" "}
              <span className="text-missions-color">
                in Washington, D.C., USA
              </span>
            </h1>
            <p className="text-[20px]">smssynergyinc@gmail.com</p>
            <p className="text-[20px]">+00 000 000 000</p>
            <p className="text-[20px]">
              Headquartered in Washington, D.C., USA
            </p>
          </div>
        </div>
        {/* GRID TEMPLATE */}
        <div className="grid grid-cols-4 mt-[40px] gap-[300px] text-white">
          <div className="bg-[url('../assets/office_two.png')] bg-cover bg-center w-[430px] h-[294px] p-[16px] flex items-end">
            <div className="w-[205px] h-[160px] box-border rounded-[10px] backdrop-blur-xl px-[20px] py-[12px] flex flex-col justify-end">
              <h1 className="text-[24px] font-bold pb-[19px]">Istanbul</h1>
              <div className="flex flex-col gap-[20px] text-left">
                <p className="text-[12px] leading-[14px]">
                  smssynergyinc@gmail.com
                </p>
                <p className="text-[12px] leading-[14px]">+00 000 000 000</p>
                <p className="text-[12px] leading-[14px]">Istanbul</p>
              </div>
            </div>
          </div>
          <div className="bg-[url('../assets/office_three.png')] bg-cover bg-center w-[430px] h-[294px] p-[16px] flex items-end">
            <div className="w-[205px] h-[160px] box-border rounded-[10px] backdrop-blur-xl px-[20px] py-[12px] flex flex-col justify-end">
              <h1 className="text-[24px] font-bold pb-[19px]">Dubai</h1>
              <div className="flex flex-col gap-[20px] text-left">
                <p className="text-[12px] leading-[14px]">
                  smssynergyinc@gmail.com
                </p>
                <p className="text-[12px] leading-[14px]">+00 000 000 000</p>
                <p className="text-[12px] leading-[14px]">Dubai</p>
              </div>
            </div>
          </div>
          <div className="bg-[url('../assets/office_four.png')] bg-cover bg-center w-[430px] h-[294px] p-[16px] flex items-end">
            <div className="w-[205px] h-[160px] box-border rounded-[10px] backdrop-blur-xl px-[20px] py-[12px] flex flex-col justify-end">
              <h1 className="text-[24px] font-bold pb-[19px]">Jeddah</h1>
              <div className="flex flex-col gap-[20px] text-left">
                <p className="text-[12px] leading-[14px]">
                  smssynergyinc@gmail.com
                </p>
                <p className="text-[12px] leading-[14px]">+00 000 000 000</p>
                <p className="text-[12px] leading-[14px]">Jeddah</p>
              </div>
            </div>
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
