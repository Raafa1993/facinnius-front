import React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


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
          <SwiperSlide><img src="https://images.unsplash.com/photo-1633013980214-95bbfe6427df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://images.unsplash.com/photo-1543412560-1538feff707d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://images.unsplash.com/photo-1519125478587-9e2e97231d2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw5MTB8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://images.unsplash.com/photo-1489493585363-d69421e0edd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8OTEwfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://images.unsplash.com/photo-1488227402652-00175718582c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8OTEwfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://images.unsplash.com/photo-1487357298028-b07e960d15a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8OTEwfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://images.unsplash.com/photo-1488197047962-b48492212cda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8OTEwfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://images.unsplash.com/photo-1527745607521-b8270d950e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw5MTB8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" /></SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
