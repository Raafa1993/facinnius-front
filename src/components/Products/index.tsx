import React from "react";
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export default function Products() {
//   let swiperProducts = new Swiper(".products__container", {
//     spaceBetween: 32,
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     loop: true,

//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },

//     breakpoints: {
// 		1024: {
// 			spaceBetween: 72,
// 		},
//   	},
// });

  return (
    <section className="products section" id="products">
      <h2 className="section__title">Best Products</h2>

      <div className="products__container container swiper">
        <div className="swiper-wrapper">
          <Swiper
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation]}
            breakpoints={{
              1024: {
                spaceBetween: 72,
                slidesPerView: 3
              }
            }}
            className=".products__container"
            spaceBetween={32}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
          >
            <SwiperSlide className="products__card swiper-slide" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              {/* <article className="products__card"> */}
                <img
                  src="../images/product1.png"
                  alt="product image"
                  className="products__img"
                />

                <h2 className="products__title">Gotland black Jacket</h2>
                <span className="products__price">$124.99</span>
              {/* </article> */}
            </SwiperSlide>

            <SwiperSlide className="products__card swiper-slide" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              {/* <article className="products__card"> */}
                <img
                  src="../images/product2.png"
                  alt="product image"
                  className="products__img"
                />

                <h2 className="products__title">Black Sports Shorts</h2>
                <span className="products__price">$34.99</span>
              {/* </article> */}
            </SwiperSlide>

            <SwiperSlide className="products__card swiper-slide" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              {/* <article className="products__card"> */}
                <img
                  src="../images/product3.png"
                  alt="product image"
                  className="products__img"
                />

                <h2 className="products__title">Knox Quilted Jacket</h2>
                <span className="products__price">$97.99</span>
              {/* </article> */}
            </SwiperSlide>

            <SwiperSlide className="products__card swiper-slide" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              {/* <article className="products__card"> */}
                <img
                  src="../images/product4.png"
                  alt="product image"
                  className="products__img"
                />

                <h2 className="products__title">Blue Sport Pants</h2>
                <span className="products__price">$69.99</span>
              {/* </article> */}
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="swiper-button-next">
          <i className="ri-arrow-right-line"></i>
        </div>

        <div className="swiper-button-prev">
          <i className="ri-arrow-left-line"></i>
        </div>
      </div>
    </section>
  );
}
