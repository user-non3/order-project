import { useState } from "react";
import { Tooltip } from "react-tooltip";
import worldMap from "../../assets/map.png";
import usaFlag from "../../assets/flags/usa.png";

const locations = [
  {
    name: "Melbourne, AUS",
    address: "100 Smith Street, Collingwood VIC 3066 AU",
    coordinates: { x: "75%", y: "65%" },
    flag: "AUS",
  },
  {
    name: "New York, USA",
    address: "123 Main St, New York, NY 10001",
    coordinates: { x: "29%", y: "35%" },
    flag: "USA",
  },
];

const Map = () => {
  const [tooltipData, setTooltipData] = useState(null);

  return (
    <div className="relative flex justify-center items-center w-full h-[500px] font-raleway">
      <img
        src={worldMap}
        className="absolute w-full h-full bg-no-repeat bg-cover bg-center"
      />
      <div className="">
        {locations.map((location, index) => (
          <div
            key={index}
            className="absolute cursor-pointer"
            style={{
              top: location.coordinates.y,
              left: location.coordinates.x,
            }}
            onMouseEnter={() => setTooltipData(location)}
            onMouseLeave={() => setTooltipData(null)}
          >
            <div class="flex justify-center items-center relative hover:animate-ping duration-[3ms]">
              <span class="absolute block w-[40px] h-[40px] bg-main-blue rounded-full opacity-10"></span>
              <span class="absolute block w-[24px] h-[24px] bg-main-blue rounded-full opacity-20"></span>
              <span class="absolute block w-[8px] h-[8px] bg-main-blue rounded-full"></span>
            </div>
            {/* <div class="flex flex-col justify-center items-center gap-4">
              <span class="block w-[40px] h-[40px] bg-main-blue rounded-full opacity-10"></span>
              <span class="block w-[24px] h-[24px] bg-main-blue rounded-full opacity-20"></span>
              <span class="block w-[8px] h-[8px] bg-main-blue rounded-full"></span>
            </div> */}
          </div>
        ))}
      </div>

      {tooltipData && (
        <div
          className="absolute p-3 bg-white shadow-lg rounded-md ml-[10px]"
          style={{
            top: `calc(${tooltipData.coordinates.y} - 2rem)`,
            left: `calc(${tooltipData.coordinates.x} + 1rem)`,
          }}
        >
          <div className="flex flex-row gap-1">
            <p className="font-bold">{tooltipData.name} </p>
            <img src={usaFlag} className="w-[20px] h-[20px]" />
          </div>
          <p className="text-gray-500 text-sm">{tooltipData.address}</p>
        </div>
      )}
    </div>
  );
};

export default Map;
