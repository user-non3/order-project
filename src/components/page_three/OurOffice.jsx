import officeOne from "../../assets/office_one.png";
import mailIcon from "../../assets/mail.svg";
import phoneIcon from "../../assets/phone.svg";
import locationIcon from "../../assets/location.svg";

export default function OurOffice() {
  return (
    <section className="container mx-auto w-full font-raleway mt-[65px]">
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
            <h1 className="text-[40px] font-bold w-[715px] h-[94px] mb-[7px]">
              Headquartered{" "}
              <span className="text-missions-color">
                in Washington, D.C., USA
              </span>
            </h1>
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-row items-center gap-[10px]">
                <div className="w-[48px] h-[48px] bg-missions-color rounded-[10px] flex items-center justify-center">
                  <img src={mailIcon} />
                </div>
                <p className="text-[20px]">smssynergyinc@gmail.com</p>
              </div>
              <div className="flex flex-row items-center gap-[10px]">
                <div className="w-[48px] h-[48px] bg-missions-color rounded-[10px] flex items-center justify-center">
                  <img src={phoneIcon} />
                </div>
                <p className="text-[20px]">+00 000 000 000</p>
              </div>
              <div className="flex flex-row items-center gap-[10px]">
                <div className="w-[48px] h-[48px] bg-missions-color rounded-[10px] flex items-center justify-center">
                  <img src={locationIcon} />
                </div>
                <p className="text-[20px]">
                  Headquartered in Washington, D.C., USA
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* GRID TEMPLATE */}
        <div className="grid grid-cols-4 mt-[40px] gap-[300px] text-white">
          <div className="bg-[url('../assets/office_two.png')] bg-cover bg-center w-[430px] h-[294px] p-[16px] flex items-end">
            <div className="w-[220px] h-[160px] box-border rounded-[10px] backdrop-blur-xl px-[20px] py-[12px] flex flex-col justify-end">
              <h1 className="text-[24px] font-bold pb-[8px]">Istanbul</h1>
              <div className="flex flex-col gap-[14px] text-left">
                <p className="text-[12px] leading-[14px] flex flex-row items-center gap-2">
                  <img src={mailIcon} />
                  smssynergyinc@gmail.com
                </p>
                <p className="text-[12px] leading-[14px] flex flex-row items-center gap-2">
                  <img src={phoneIcon} />
                  +00 000 000 000
                </p>
                <p className="text-[12px] leading-[14px] flex flex-row items-center gap-2">
                  <img src={locationIcon} />
                  Istanbul
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[url('../assets/office_three.png')] bg-cover bg-center w-[430px] h-[294px] p-[16px] flex items-end">
            <div className="w-[220px] h-[160px] box-border rounded-[10px] backdrop-blur-xl px-[20px] py-[12px] flex flex-col justify-end">
              <h1 className="text-[24px] font-bold pb-[8px]">Dubai</h1>
              <div className="flex flex-col gap-[14px] text-left">
                <p className="text-[12px] leading-[14px] flex flex-row items-center gap-2">
                  <img src={mailIcon} />
                  smssynergyinc@gmail.com
                </p>
                <p className="text-[12px] leading-[14px] flex flex-row items-center gap-2">
                  <img src={phoneIcon} />
                  +00 000 000 000
                </p>
                <p className="text-[12px] leading-[14px] flex flex-row items-center gap-2">
                  <img src={locationIcon} />
                  Dubai
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[url('../assets/office_four.png')] bg-cover bg-center w-[430px] h-[294px] p-[16px] flex items-end">
            <div className="w-[220px] h-[160px] box-border rounded-[10px] backdrop-blur-xl px-[20px] py-[12px] flex flex-col justify-end">
              <h1 className="text-[24px] font-bold pb-[8px]">Jeddah</h1>
              <div className="flex flex-col gap-[14px] text-left">
                <p className="text-[12px] leading-[14px] flex flex-row items-center gap-2">
                  <img src={mailIcon} />
                  smssynergyinc@gmail.com
                </p>
                <p className="text-[12px] leading-[14px] flex flex-row items-center gap-2">
                  <img src={phoneIcon} />
                  +00 000 000 000
                </p>
                <p className="text-[12px] leading-[14px] flex flex-row items-center gap-2">
                  <img src={locationIcon} />
                  Jeddah
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
