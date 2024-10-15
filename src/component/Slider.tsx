// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../index.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import SwiperCore from "swiper";

export default function Slider() {
  SwiperCore.use([Autoplay]);
  const src = [
    { id: "1", src: "slider (1).gif" },
    { id: "2", src: "slider (1).jpg" },
    { id: "3", src: "slider (2).jpg" },
    { id: "4", src: "slider (3).jpg" },
    { id: "5", src: "slider (4).jpg" },
    { id: "6", src: "slider (5).jpg" },
    { id: "7", src: "slider (6).jpg" },
    { id: "8", src: "slider (7).jpg" },
    { id: "9", src: "slider (8).jpg" },
    { id: "10", src: "slider (9).jpg" },
  ];
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {src.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              {" "}
              <img src={item.src} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
