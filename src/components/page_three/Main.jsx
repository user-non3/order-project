import Navbar from "../Navbar";

export default function Main() {
  return (
    <div className="bg-[url('../assets/bg_services.png')] w-full bg-cover pt-5">
      <div className="container mx-auto w-[1440px] h-[600px] ">
        <Navbar />
        <section
          className="mt-[110px] font-raleway flex flex-col justify-center items-center"
          id="main"
        >
          <div className="w-[99px] h-[39px] text-white rounded-[10px] flex flex-row justify-center items-center backdrop-blur-[10px] font-normal">
            <h1>About Us</h1>
          </div>
          <div className="mt-[30px] text-white text-center">
            <h1 className="text-[56px] font-bold tracking-normal leading-[66px] w-[1040px] h-[132px]">
              Learn about the{" "}
              <span className="opacity-35">dedication to work</span> in our
              company
            </h1>
          </div>
        </section>
      </div>
    </div>
  );
}
