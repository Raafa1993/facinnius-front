import React from "react";

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
  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <section className="home" style={{ paddingTop: '4.5rem' }} id="home">
      {/* <div className="home__container container grid">
        <div className="home__data">
          <h1 className="home__title">
            New Clothing <br />
            Collection
          </h1>

          <p className="home__description">
            The new collection of clothing from <br />
            the best brands this year.
          </p>

          <a href="#new" className="button__link">
            Explore <i className="ri-arrow-right-line"></i>
          </a>
        </div>

        <div className="home__images">
          <img src='../images/home1.png' alt="teste" />
          <img src='../images/home2.png' alt="teste" />
        </div>
      </div> */}
      <div style={{ display: 'flex' }}>
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
          className="mySwiper"
        >
          <SwiperSlide><Image src={banner1} alt="banner1"/></SwiperSlide>
          <SwiperSlide><Image src={banner2} alt="banner2"/></SwiperSlide>
          <SwiperSlide><Image src={banner3} alt="banner3"/></SwiperSlide>
          <SwiperSlide><Image src={banner4} alt="banner4"/></SwiperSlide>
          <SwiperSlide><Image src={banner5} alt="banner5"/></SwiperSlide>
          <SwiperSlide><Image src={banner6} alt="banner6"/></SwiperSlide>
          <SwiperSlide><Image src={banner7} alt="banner7"/></SwiperSlide>
          <SwiperSlide><Image src={banner8} alt="banner8"/></SwiperSlide>
          <SwiperSlide><Image src={banner9} alt="banner9"/></SwiperSlide>
          <SwiperSlide><Image src={banner10} alt="banner10"/></SwiperSlide>
          <SwiperSlide><Image src={banner11} alt="banner11"/></SwiperSlide>
          <SwiperSlide><Image src={banner12} alt="banner12"/></SwiperSlide>
          <SwiperSlide><Image src={banner13} alt="banner13"/></SwiperSlide>
          <SwiperSlide><Image src={banner14} alt="banner14"/></SwiperSlide>
          <SwiperSlide><Image src={banner15} alt="banner15"/></SwiperSlide>
          <SwiperSlide><Image src={banner16} alt="banner16"/></SwiperSlide>
          <SwiperSlide><Image src={banner17} alt="banner17"/></SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
