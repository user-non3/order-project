import worldMap from "../../assets/world_map.svg";
import Map from "./Map";

export default function WorldMap() {
  return (
    <section className="container mx-auto w-full font-raleway ">
      <div className="">
        <h1 className="text-main-blue w-[617px] h-[188px] text-[40px] font-bold leading-[47px]">
          Furthermore, SMS Synergy Inc. partners have extensive on hand
          expertise{" "}
          <span className="text-missions-color">
            in the following countries
          </span>
        </h1>
      </div>
      <div className="my-[100px] h-[482px] w-[950px] container mx-auto flex flex-col justify-center ml-[200px]">
        {/* <div className="bg-[url('../../assets/world_map.svg')]">
          <img src={worldMap} /> */}
        {/* <div className="w-[48px] h-[48px] bg-main-blue rounded-[28px]">
            <a className="w-[28px] h-[28px] bg-red-600 opacity-20 rounded-[50px]">.</a>
          </div> */}
        {/* <div class="absolute top-1/2 left-1/3 w-4 h-4 bg-blue-500 rounded-full opacity-75"></div>
          <div class="absolute top-1/4 left-2/3 w-4 h-4 bg-blue-500 rounded-full opacity-75"></div>
          <div class="absolute top-3/4 left-1/4 w-4 h-4 bg-blue-500 rounded-full opacity-75"></div>
        </div> */}
        <div className="">
          <Map />
        </div>
      </div>
      <div className="h-[500px] bg-[url('../assets/poster_five.png')] bg-cover bg-center rounded-[20px] flex flex-col justify-center px-[50px]">
        <h1 className="text-[56px] font-bold leading-[66px] w-[1340px] h-[132px] text-white">
          Building a business for the future with{" "}
          <span className="opacity-35">sustainability and responsibility</span>
        </h1>
      </div>
    </section>
  );
}
