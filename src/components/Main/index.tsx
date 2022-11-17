import React, { useState } from "react";

//ImagesBanner
import banner1 from '../../../public/images/banner1.jpg';
import banner2 from '../../../public/images/banner2.jpg';
import banner3 from '../../../public/images/banner3.jpg';
import banner4 from '../../../public/images/banner4.jpg';
import banner5 from '../../../public/images/banner5.jpg';
import banner6 from '../../../public/images/banner6.jpg';
import banner7 from '../../../public/images/banner7.jpg';
import banner8 from '../../../public/images/banner8.jpg';
import banner9 from '../../../public/images/banner9.jpg';
import banner10 from '../../../public/images/banner10.jpg';
import banner11 from '../../../public/images/banner11.jpg';
import banner12 from '../../../public/images/banner12.jpg';
import banner13 from '../../../public/images/banner13.jpg';
import banner14 from '../../../public/images/banner14.jpg';
import banner15 from '../../../public/images/banner15.jpg';
import banner16 from '../../../public/images/banner16.jpg';
import banner17 from '../../../public/images/banner17.jpg';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Main() {
  const [activeBanner, setActiveBanner] = useState(1);
  const banners = [
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
    banner6,
    banner7,
    banner8,
    banner9,
    banner10,
    banner11,
    banner12,
    banner13,
    banner14,
    banner15,
    banner16,
    banner17
  ]

  return (
    <section className="home" id="home">
      <div className="divTeste" 
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: `url(${banners[activeBanner].src})`,
          filter: 'blur(10px)',
          backgroundColor: '#cecece',
        }}
      />

      <div className="background-image">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          onActiveIndexChange={(i) => setActiveBanner(i.realIndex)}
          className="mySwiper"
        >
          <SwiperSlide><Image src={banner1} objectFit="cover" alt="banner1"/></SwiperSlide>
          <SwiperSlide><Image src={banner2} objectFit="cover" alt="banner2"/></SwiperSlide>
          <SwiperSlide><Image src={banner3} objectFit="cover" alt="banner3"/></SwiperSlide>
          <SwiperSlide><Image src={banner4} objectFit="cover" alt="banner4"/></SwiperSlide>
          <SwiperSlide><Image src={banner5} objectFit="cover" alt="banner5"/></SwiperSlide>
          <SwiperSlide><Image src={banner6} objectFit="cover" alt="banner6"/></SwiperSlide>
          <SwiperSlide><Image src={banner7} objectFit="cover" alt="banner7"/></SwiperSlide>
          <SwiperSlide><Image src={banner8} objectFit="cover" alt="banner8"/></SwiperSlide>
          <SwiperSlide><Image src={banner9} objectFit="cover" alt="banner9"/></SwiperSlide>
          <SwiperSlide><Image src={banner10} objectFit="cover" alt="banner10"/></SwiperSlide>
          <SwiperSlide><Image src={banner11} objectFit="cover" alt="banner11"/></SwiperSlide>
          <SwiperSlide><Image src={banner12} objectFit="cover" alt="banner12"/></SwiperSlide>
          <SwiperSlide><Image src={banner13} objectFit="cover" alt="banner13"/></SwiperSlide>
          <SwiperSlide><Image src={banner14} objectFit="cover" alt="banner14"/></SwiperSlide>
          <SwiperSlide><Image src={banner15} objectFit="cover" alt="banner15"/></SwiperSlide>
          <SwiperSlide><Image src={banner16} objectFit="cover" alt="banner16"/></SwiperSlide>
          <SwiperSlide><Image src={banner17} objectFit="cover" alt="banner17"/></SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
