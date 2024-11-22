import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import imgOne from "../../assets/slide_one.png";
import imgTwo from "../../assets/slide_two.png";
import imgThree from "../../assets/slide_three.png";
import imgFour from "../../assets/slide_four.png";
import imgFive from "../../assets/slide_five.png";
import imgSix from "../../assets/slide_six.png";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";

const SwiperFile = () => {
  return (
    <div className="">
      <div className="bg-gradient-to-r from-[rgba(255,255,255,0)] to-[rgba(255,34,34,0.8)] w-full z-[10] rounded-[20px] ">
        <Swiper
          centeredSlides={true}
          modules={[Autoplay, EffectCoverflow, Navigation]}
          loop={true}
          spaceBetween={20}
          slidesPerView={3}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
        >
          <SwiperSlide>
            <img src={imgOne} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgTwo} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgThree} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgFour} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgFive} />
          </SwiperSlide>
          <SwiperSlide className="flex flex-row gap-10">
            <img src={imgSix} />
            <div className="absolute bottom-2 left-4 w-[350px] h-[104px] mb-[8px] rounded-[10px] backdrop-blur-[25px] text-white py-3 px-5">
              <div className="flex flex-col justify-center items-start gap-1">
                <h1 className="text-[20px] font-bold w-[300px]">
                  Managment Consultancy
                </h1>
                <p className="text-[14px] opacity-35 w-full">
                  Advising clients on best practices and organizational
                  improvements.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperFile;
